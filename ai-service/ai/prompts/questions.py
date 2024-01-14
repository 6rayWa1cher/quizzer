""" Промпты для генерации вопросов """

from typing import List

from ai.prompts.base import construct_prompt


def quest_sys_prompt() -> str:
    """ Возвращает системный промпт для генерации вопросов. """

    sys_prompt = """You must come up with questions for tests.
Try to come up with varied and interesting questions.
It should be possible to answer questions in monosyllables. There is no need to ask for a detailed explanation of the answer.
Please do not write anything other than made-up questions in your response.
"""

    return sys_prompt

def quest_user_prompt(user_theme: str, question_cnt: int | None = None) -> str:
    """ Формирует промпт, в котором пользователь просит составить
    question_cnt вопросов на тему user_theme. """

    str_count = "few" if question_cnt is None else str(question_cnt)

    user_prompt = f"""You must come up with a {str_count} questions on the topic '{user_theme}'.
You will be penalized for repeating them.
"""

    return user_prompt

def construct_quest_prompt(user_theme: str, question_cnt: int | None = None):
    """ Объединяет системную и пользовательскую части промпта для генерации вопросов. """

    return construct_prompt(quest_user_prompt(user_theme, question_cnt),
                            quest_sys_prompt())

def parse_generated_questions(model_answer: str) -> List[str]:
    """ Парсит ответ модели на промпт, возвращаемый функцией construct_quest_prompt.
    Возвращает только вопросы в виде списка строк."""

    print('model_answer', model_answer, flush=True)
    parsed_answer = model_answer.split("[/INST]")[1]
    parsed_answer = parsed_answer.rstrip("</s>").strip()
    parsed_answer_list = list(map(str.strip, parsed_answer.split("?")))
    parsed_answer_list = [parsed_answer_list[0].split("\n\n")[1]] + parsed_answer_list[1:-1]
    parsed_answer_list = [parsed_answer_list[i].split(f"{i+1}.")[1].strip() + "?" for i in range(len(parsed_answer_list))]

    return parsed_answer_list
