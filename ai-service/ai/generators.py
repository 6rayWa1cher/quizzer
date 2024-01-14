""" Файл, содержащий генераторы запросов к LLM. """

from typing import List, Dict, Tuple, TypedDict, Generator
from random import shuffle

from ai.prompts.questions import construct_quest_prompt, parse_generated_questions
from ai.prompts.answers import construct_ans_prompt, parse_generated_answer
from ai.prompts.answers import ans_user_prompt_update_begin, ans_user_prompt_update_end

from ai.models import CombinedModel, MockModel

class CombinedGenerator:
    """ Позволяет взаимодействовать с CombinedModel: генерировать вопросы, ответы и парсить их. """

    def __init__(self):
        self.model = CombinedModel()

    def generate_questions(self,
                           user_theme: str,
                           question_cnt: int | None = None,
                           generate_params: Dict | None = None) -> str:
        """ Формирует промпт в нужном для CombinedModel формате и
        выполняет запрос на генерацию к ней. """

        prompt = construct_quest_prompt(user_theme, question_cnt)
        return self.model.generate(prompt, generate_params)

    def parse_questions(self, raw_questions: str) -> List[str]:
        """ Парсит результат выполнения generate_questions. """
        print(raw_questions)
        return parse_generated_questions(raw_questions)

    def next_answer(self,
                    question: str,
                    correctness: List[bool],
                    generate_params: Dict | None = None) -> Generator[str, None, None]:
        """ Генератор, возвращающий следующий ответ на вопрос question.
        Ответы генерируются и возвращаются в том-же порядке, в котором
        они заданы в списке correctness. """

        prompt = construct_ans_prompt(question, correctness[0])
        new_answer = self.model.generate(prompt, generate_params)
        yield new_answer

        prompt = ans_user_prompt_update_end(prompt, new_answer, delim="\n\n")

        for corr_state in correctness[1:]:
            prompt = ans_user_prompt_update_begin(prompt, question, corr_state)

            new_answer = self.model.generate(prompt, generate_params)
            yield new_answer

            prompt = ans_user_prompt_update_end(prompt, new_answer)


    def parse_answer(self, raw_answer: str) -> str:
        """ Парсит ответы, полученные из next_answer """
        print("raw_answer: ", raw_answer)
        return parse_generated_answer(raw_answer)


class MockGenerator:
    """ Позволяет взаимодействовать с MockModel: генерировать вопросы, ответы и парсить их. """

    def __init__(self):
        self.model = MockModel()

    def generate_questions(self,
                           user_theme: str,
                           question_cnt: int | None = None,
                           generate_params: Dict | None = None) -> str:
        """ Формирует промпт в нужном для MockModel формате и
        выполняет запрос на генерацию к ней. """

        prompt = f"Q|{user_theme}|{question_cnt}"
        return self.model.generate(prompt, generate_params)

    def parse_questions(self, raw_questions: str) -> List[str]:
        """ Парсит результат выполнения generate_questions. """
        return raw_questions.split("\n")

    def next_answer(self,
                    question: str,
                    correctness: List[bool],
                    generate_params: Dict | None = None) -> Generator[str, None, None]:
        """ Генератор, возвращающий следующий ответ на вопрос question.
        Для данной модели вопрос не имеет значения, будут даны однообразные ответы.
        Ответы генерируются и возвращаются в том-же порядке, в котором
        они заданы в списке correctness. """

        prompt = f"{'Correct' if correctness[0] else 'Incorrect'}"
        new_answer = self.model.generate(prompt, generate_params)
        yield new_answer

        for corr_state in correctness[1:]:
            prompt = f"{'Correct' if corr_state else 'Incorrect'}"
            new_answer = self.model.generate(prompt, generate_params)
            yield new_answer

    def parse_answer(self, raw_answer: str) -> str:
        """ Парсит результат выполнения next_answer. """

        return raw_answer


class PollGenerator:
    """ Класс генерации полноценного опроса с одним правильным и тремя неправильными ответами. """

    def __init__(self, do_mock: bool = False):
        self.generator: MockGenerator | CombinedGenerator

        if do_mock:
            self.generator = MockGenerator()
        else:
            self.generator = CombinedGenerator()

    def generate_questions(self,
                           user_theme: str,
                           question_cnt: int | None = None,
                           generate_params: Dict | None = None) -> List[str]:
        """ Генерирует question_cnt вопросов на тему user_theme. """
        raw_questions = self.generator.generate_questions(user_theme, question_cnt, generate_params)
        return self.generator.parse_questions(raw_questions)

    def generate_answers(self,
                         question: str,
                         generate_params: Dict | None = None) -> Tuple[List[str], List[bool]]:
        """ Генерирует варианты ответов на вопрос question. """

        answers: List[str] = []

        correctness: List[bool] = [True, False, False, False]
        shuffle(correctness)

        for answer in self.generator.next_answer(question, correctness, generate_params):
            answers.append(self.generator.parse_answer(answer))

        return answers, correctness

    class CompleteQuestion(TypedDict):
        """ Тип опроса данных опроса. """
        question: str
        answers: List[str]
        correct_answer: List[bool]

    def generate_poll(self,
                      user_theme: str,
                      question_cnt: int | None = None,
                      *,
                      rabbit_id: str,
                      rabbit_sender,
                      question_generate_params: Dict | None = None,
                      answer_generate_params: Dict | None = None) -> List[CompleteQuestion]:
        """ Генерирует один полный опрос, состоящий из question_cnt вопросов на тему user_theme. """

        questions = self.generate_questions(self.generator.model.translate_to(user_theme, "en"),
                                            question_cnt,
                                            question_generate_params)

        answers_list: List[List[str]] = []
        statuses_list: List[List[bool]] = []

        for i, question in enumerate(questions):
            answers, statuses = self.generate_answers(question, generate_params=answer_generate_params)

            answers_list.append(answers)
            statuses_list.append(statuses)

            if rabbit_sender is not None:
                rabbit_sender.generation_rabbit_update(rabbit_id, i + 1, len(questions))
        print("stats", statuses_list, flush=True)
        print("ans", answers_list, flush=True)
        return [{
            "question": self.generator.model.translate_to(question, "ru"),
            "answers": [self.generator.model.translate_to(answer, "ru") for answer in answers],
            "correct_answer": self.generator.model.translate_to(answers[statuses.index(True)], "ru")
        } for question, answers, statuses in zip(questions, answers_list, statuses_list)]
