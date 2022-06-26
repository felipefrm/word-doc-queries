import { Text } from "@chakra-ui/react";

export function Word({ word }) {
  return (
    <Text fontSize="xl">
      {word[0]} - <b dangerouslySetInnerHTML={{__html: word[1]}}></b> ocorrências no texto.
    </Text>
  )
}