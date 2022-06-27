import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Sentence } from "./Sentence";
import { SubmitButton } from "../SubmitButton";

import api from "../../../services/api";
import { useToast } from "../../../hooks/useToast";
import { isWord } from "../../../utils";

export function WordSentences() {
  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  const [sentences, setSentences] = useState([])
  const [word, setWord] = useState('')

  const onSubmit = async (data) => {
    if (!isWord(data.word)) {
      toast.info({ title: 'Entrada inválida', description: 'Insira uma palavra.' })
      return
    }

    setWord(data.word)
    api.post('documents/word-sentences', data)
      .then(response => setSentences(response.data))
      .catch(err => toast.error({ title: 'Falha ao executar método' }))
  };
  
  return (
    <Flex
      mx={10}
      mt={20}
      direction="column"
    >
      <FormControl
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        isRequired
      >
        <Flex direction="column">
          <FormLabel htmlFor="word" fontSize="xl">Digite uma palavra</FormLabel>
          <Input
            id="word"
            type="text"
            size="lg"
            {...register("word")}
            maxW={400}
            borderRadius={4}
            focusBorderColor="black"
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
        {sentences.length > 0 &&
          sentences.map((text, index) => (
            <Sentence key={index} word={word} index={index}>{text}</Sentence>
          ))
        }
      </Flex>
    </Flex>
  )
}