import { Text } from "@chakra-ui/react";

export function Sentence({ word, index, children }) {
  
  const wordRegex = new RegExp("\\b" + word + "\\b", 'gi')
  const sentence = children.replace(wordRegex, (w) => '<b>' + w + '</b>');

  
  return (
    <Text color="#3A5163" fontSize="xl">
      {index} - <span dangerouslySetInnerHTML={{__html: sentence}}></span>
    </Text>
  )
}