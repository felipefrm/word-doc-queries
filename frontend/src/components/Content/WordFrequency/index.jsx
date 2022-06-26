import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SubmitButton } from "../SubmitButton";

import { useToast } from "../../../hooks/useToast";
import api from "../../../services/api";
import { isWord } from "../../../utils";

export function WordFrequency() {
  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  const [frequency, setFrequency] = useState(0)
  const [word, setWord] = useState('')

  const onSubmit = async (data) => {
    if (!isWord(data.word)) {
      toast.info({ title: 'Entrada inválida', description: 'Insira uma palavra.' })
      return
    }

    setWord(data.word)
    api.post('documents/word-frequency', data)
      .then(response => setFrequency(response.data))
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
        <Flex direction="column" w="full" maxW="400px">
          <FormLabel htmlFor="word" fontSize="xl">Digite uma palavra</FormLabel>
          <Input
            id="word"
            type="text"
            size="lg"
            {...register("word")}
            borderRadius={4}
            focusBorderColor="black"
          />
          <SubmitButton isLoading={isSubmitting} />
        </Flex>
      </FormControl>

      {word !== '' &&
        <Text fontSize="xl">
          A palavra <Text as="span" fontWeight="bold">{word}</Text> foi encontrada {frequency} {frequency > 1 ? 'vezes' : 'vez'} do texto.
        </Text>
      }
    </Flex>
  )
}