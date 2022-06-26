import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SubmitButton } from "../SubmitButton";
import { Word } from "./Word";

import api from "../../../services/api";
import { useToast } from "../../../hooks/useToast";

export function TopWords() {
  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  const [topWords, setTopWords] = useState([])

  const onSubmit = async (data) => {
    const { count, length } = data

    if (count < 0 || length < 0) {
      toast.info({ title: 'Entrada inválida', description: 'Valores não podem ser negativos.' })
      return
    }

    api.post('documents/top-words', {
      count,
      minWordLength: length
    })
      .then(response => setTopWords(response.data))
      .catch(err => toast.error({ title: 'Falha ao executar método.' }))
  };

  console.log(topWords)

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
          <Flex gap="20" align="flex-end" wrap={["wrap", "wrap", "nowrap"]}>
            <Flex direction="column" w="full" maxW="350px">
              <FormLabel htmlFor="count" fontSize="xl">Count</FormLabel>
              <Input
                id="count"
                type="number"
                size="lg"
                {...register("count")}
                w="100%"
                borderRadius={4}
                focusBorderColor="black"
              />
            </Flex>
            <Flex direction="column" w="full" maxW="350px">
              <FormLabel htmlFor="length" fontSize="xl">Minimum Word Length</FormLabel>
              <Input
                id="length"
                type="number"
                size="lg"
                {...register("length")}
                w="100%"
                borderRadius={4}
                focusBorderColor="black"
              />
            </Flex>
          </Flex>
          <SubmitButton isLoading={isSubmitting} />
        </Flex>
      </FormControl>

      <Flex h="55vh" overflowY="auto" direction="column" gap="4">
        {topWords.length > 0 &&
          topWords.map((word, index) => (
            <Word word={word} />
          ))
        }
      </Flex>
    </Flex>
  )
}