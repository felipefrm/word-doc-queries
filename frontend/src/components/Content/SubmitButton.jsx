import { Button } from "@chakra-ui/react";

export function SubmitButton({ isLoading, ...rest }) {
  return (
    <Button
      alignSelf="flex-start"
      bgColor="blue.600"
      mt="6"
      mb="9"
      px="5"
      py="2"
      color="white"
      fontSize="xl"
      type="submit"
      isLoading={isLoading}
      {...rest}
    >
      Verificar
    </Button>
  )
}