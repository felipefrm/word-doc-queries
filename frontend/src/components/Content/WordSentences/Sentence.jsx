import { Text } from "@chakra-ui/react";

export function Sentence({ word, index, children }) {
  
  const wordRegex = new RegExp(word, 'g');
  const sentence = children.replace(wordRegex, '<b>' + word + '</b>')
  console.log(sentence)
  
  return (
    <Text color="#3A5163" fontSize="xl">
      {index} - <span dangerouslySetInnerHTML={{__html: sentence}}></span>
    </Text>
  )
}