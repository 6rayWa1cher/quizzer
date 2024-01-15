""" Стандартные промпты """

def default_user_prompt() -> str:
    """ Стандартный пользовательский промпт. """

    return "Tell me about AI"

def default_system_prompt() -> str:
    """ Стандартный системный промпт. """

    return """You are a helpful, respectful and honest assistant.
Always answer as helpfully as possible, while being safe.
Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content.
Please ensure that your responses are socially unbiased and positive in nature.
If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct.
If you don't know the answer to a question, please don't share false information."""

def construct_prompt(user_prompt: str | None = None, system_prompt: str | None = None) -> str:
    """ Собирает системный и пользовательский промпт вместе в виде,
    пригодном для загрузки в чат-версию модели llama2. """

    if system_prompt is None:
        system_prompt = default_system_prompt()

    if user_prompt is None:
        user_prompt = default_user_prompt()

    B_SYS, E_SYS = "<<SYS>>", "<</SYS>>"
    B_INST, E_INST = "[INST]", "[/INST]"

    prompt = f"{B_INST} {B_SYS}\n{system_prompt.strip()}\n{E_SYS}\n\n{user_prompt.strip()} {E_INST}\n"

    return prompt
