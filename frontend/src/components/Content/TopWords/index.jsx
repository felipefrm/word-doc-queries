import { Flex, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { InputMethod as Input } from "../../Forms/InputMethod";
import { SubmitButton } from "../SubmitButton";
import { Word } from "./Word";

import api from "../../../services/api";
import { useToast } from "../../../hooks/useToast";

export function TopWords() {
  const toast = useToast()

  const { handleSubmit, register, formState: { isSubmitting } } = useForm()

  const [topWords, setTopWords] = useState([])

  const onSubmit = async (data) => {
    const { count, length } = data

    if (count < 0 || length < 0) {
      toast.info({ title: 'Entrada inválida!', description: 'Valores não podem ser negativos.' })
      return
    }

    api.post('documents/top-words', { count, minWordLength: length })
      .then(response => setTopWords(response.data))
      .catch(err => toast.error({ title: 'Falha ao executar método.' }))
  };

  return (
    <Flex mx={10} mt={20} direction="column" >
      <FormControl
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        isRequired
      >
        <Flex direction="column">
          <Flex gap="20" align="flex-end" wrap={["wrap", "wrap", "nowrap"]}>
            <Flex direction="column" w="full" maxW="350px">
              <Input
                id="count"
                type="number"
                label="Count"
                register={register("count")}
              />
            </Flex>
            <Flex direction="column" w="full" maxW="350px">
              <Input
                id="length"
                type="number"
                label="Minimum Word Length"
                register={register("length")}
              />
            </Flex>
          </Flex>
          <SubmitButton isLoading={isSubmitting} />
        </Flex>
      </FormControl>

      <Flex h="55vh" overflowY="auto" direction="column" gap="4">
        {
          topWords.map((word) => (
            <Word key={word[0]} word={word} />
          ))
        }
      </Flex>
    </Flex>
  )
}