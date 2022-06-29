import { Flex, FormControl, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { InputMethod as Input } from "../../Forms/InputMethod";
import { SubmitButton } from "../SubmitButton";
import { Sentence } from "./Sentence";

import api from "../../../services/api";
import { useToast } from "../../../hooks/useToast";
import { isWord } from "../../../utils";

export function WordSentences() {
  const toast = useToast()

  const { handleSubmit, register, formState: { isSubmitting } } = useForm()

  const [sentences, setSentences] = useState([])
  const [word, setWord] = useState('')

  const onSubmit = async (data) => {
    if (!isWord(data.word)) {
      toast.info({ title: 'Entrada inválida!', description: 'Insira uma palavra.' })
      return
    }

    setWord(data.word)
    api.post('documents/word-sentences', data)
      .then(response => setSentences(response.data))
      .catch(err => toast.error({ title: 'Falha ao executar método' }))
  };

  return (
    <>
      <FormControl
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        isRequired
      >
        <Flex direction="column">
          <Input
            id="word"
            label="Digite uma palavra"
            register={register("word")}
          />
          <SubmitButton isLoading={isSubmitting} />
        </Flex>
      </FormControl>

      {word !== '' &&
        <Text fontSize="xl">
          A palavra <Text as="span" fontWeight="bold">{word}</Text> foi encontrada em {sentences.length} {sentences.length > 1 ? 'frases' : 'frase'} do texto.
        </Text>
      }
      <Flex h="50vh" mt="8" overflowY="auto" direction="column" gap="4">
        {
          sentences.map((text, index) => (
            <Sentence key={index} word={word} index={index}>{text}</Sentence>
          ))
        }
      </Flex>
    </>
  )
}