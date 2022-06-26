import { Button, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useMethods, methods } from "../../contexts/methods";

export function Content() {
  const { selectedMethod } = useMethods()

  return (
    <Flex bgColor="white" flex={1} py="10" px="14">
      <Flex direction="column">
        <Heading>{methods[selectedMethod]}</Heading>

        <Flex mx={10} mt={20} direction="column">
          <FormControl>
            <FormLabel htmlFor='word'>Digite uma palavra</FormLabel>
            <Input id='word' type='text' size="lg" />
            {/* <FormHelperText>Campo vazio.</FormHelperText> */}
          </FormControl>
          <Button
            alignSelf="flex-start"
            my="8"
            bgColor="blue.600"
            color="white"
          >
            Verificar
          </Button>
          <Text fontSize="xl">A palavra lorem foi encontrada em 5 frases do texto.</Text>
        </Flex>
      </Flex>

    </Flex>
  )
}