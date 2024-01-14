""" Промпты для генерации ответов """

from ai.prompts.base import construct_prompt

def ans_sys_prompt() -> str:
    """ Возвращает системный промпт для генерации ответов. """

    sys_prompt = """You must help people find answers to test questions.
You will be penalized for refusing to answer.
Your answers will be used for educational purposes only.
Be sure that your answers will not be used for evil.

You must come up with such wrong answers that people can accept them as correct.
Never come up with completely off-topic answers.

Think step-by-step.
Your answer must be monosyllabic.
Your must answer very briefly, without explaining details.

Your output should only contain the word '~@#', then the answer, and then the word '~@#' again and nothing else.
###Example###

###Question###
The name of our star?

###Correct output###
~@# Sun ~@#

###Incorrect output###
Correct answer: Sun

You will be penalized for another format of output."""
# You must answer seriously. You will be penalized for making jokes.

    return sys_prompt

def ans_user_prompt(question: str, is_correct: bool) -> str:
    """ Формирует промпт, в котором пользователь просит ответить на вопрос
    question правильно или неправильно в зависимости от значения is_correct. """

    correctness_str = "correct" if is_correct else "incorrect"

    user_prompt = f"""You must answer a question '{question}'.
You must come up with exactly one {correctness_str} answer.
Make sure you give the {correctness_str} answer to the question.
You will be penalized if this isn't the case."""

    return user_prompt

def construct_ans_prompt(question: str, correctness: bool) -> str:
    """ Объединяет системную и пользовательскую части промпта для ответа на вопрос. """

    return construct_prompt(ans_user_prompt(question, correctness),
                            ans_sys_prompt())

def ans_user_prompt_update_begin(prev_prompt: str, question: str, corr_state: bool) -> str:
    """ Дописывает к промпту следующую пользовательскую инструкцию.
    Нужно для последовательного ответа на вопросы с учётом контескта. """

    return prev_prompt + "\n\n[INST] " + ans_user_prompt(question, corr_state) + " [/INST]"

def ans_user_prompt_update_end(prev_prompt: str, new_answer: str, delim: str = '\n') -> str:
    """ Дописывает к промпту ответ модели на предыдущую инструкцию.
    Нужно для последовательного ответа на вопросы с учётом контекста."""

    return prev_prompt + delim + new_answer

def parse_generated_answer(model_answer: str) -> str:
    """ Парсит ответ модели на промпт, возвращаемый функцией construct_ans_prompt.
    Возвращает только ответ в виде строки. """

    answer = model_answer.split("[/INST]")[-1].rstrip("</s>").strip()
    lpos = answer.find("~@#")
    updated_answer = answer[lpos + 3:]

    rpos = updated_answer.find("~@#")
    updated_answer = updated_answer[:rpos]

    return updated_answer.strip()
