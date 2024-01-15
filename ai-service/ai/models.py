""" Файл, содержащий классы, позволяющие совершать запросы к различным LLM. """

from typing import Dict

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from googletrans import Translator
from auto_gptq import exllama_set_max_input_length


class CombinedModel:
    """ Содержит объекты модели llama2, её токенизатора и
    объект взаимодействия с Google Translate. """

    def __init__(self):
        model_name_or_path = "TheBloke/Llama-2-13B-chat-GPTQ"
        revision = "gptq-8bit--1g-actorder_True"

        self.device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
        self.llm = AutoModelForCausalLM.from_pretrained(model_name_or_path,
                                                        device_map="auto",
                                                        trust_remote_code=False,
                                                        revision=revision)
        self.llm = exllama_set_max_input_length(self.llm, max_input_length=8192)
        self.llm_tokenizer = AutoTokenizer.from_pretrained(model_name_or_path, use_fast=True)
        self.translator = Translator()

    def generate(self,
                 prompt: str,
                 generate_params: Dict | None = None) -> str:
        """ Совершает запрос к llama2 с промптом prompt и параметрами генерации generate_params.
        Возвращает результат генерации."""

        if generate_params is None:
            generate_params = {
            "max_new_tokens": 512,
            "temperature": 0.01,
            "top_p": 0.95,
            "top_k": 50,
            "do_sample": True
        }

        input_ids = self.llm_tokenizer(prompt, return_tensors='pt').input_ids.cuda()
        output = self.llm.generate(inputs=input_ids, **generate_params)

        return self.llm_tokenizer.decode(output[0])

    def translate_to(self, sentence: str, to: str = 'en') -> str:
        """ Совершает запрос к Google Translate.
         Возвращает перевод sentence на язык to. """

        return self.translator.translate(sentence, dest=to).text
        #return sentence


class MockModel:
    """ Класс для отладки на сервере без GPU. """

    def __init__(self):
        print("MockModel")

    def generate(self,
                 prompt: str,
                 stream_params: Dict | None = None) -> str:
        """ Возвращает mock-строки в зависимости от запроса на генерацию: вопросов или ответа. """

        if prompt in ["Correct", "Incorrect"]:
            return prompt

        type_literal, user_theme, question_cnt = map(str, prompt.split("|"))

        if type_literal == "Q":
            answer = "\n".join([f"Question {user_theme} #{i + 1}: WAT?" for i in range(int(question_cnt))])
            return answer

        return f"UNDEFINED QUEUE: {prompt}."

    def translate_to(self, sentence: str, to: str = 'en') -> str:
        """ Возвращает mock-строку для перевода sentence на язык to. """

        return f"Translated_to_{to}[{sentence}]"
