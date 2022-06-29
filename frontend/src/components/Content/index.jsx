import { Flex, Heading } from "@chakra-ui/react";

import { useMethods, methods } from "../../contexts/methods";
import { TopWords } from "./TopWords";
import { WordFrequency } from "./WordFrequency"
import { WordSentences } from "./WordSentences";

export function Content() {
  const { selectedMethod } = useMethods()

  return (
    <Flex bgColor="white" flex={1} py={10} px={[6, 14]}>
      <Flex direction="column" flex={1}>
        <Heading>{methods[selectedMethod]}</Heading>
        <Flex mx={[0, 0, 10]} mt={[10, 20]} direction="column" >
          {
            selectedMethod === 'word-frequency'
              ? <WordFrequency />
              : selectedMethod === 'word-sentences'
                ? <WordSentences />
                : <TopWords />
          }
        </Flex>
      </Flex>
    </Flex>
  )
}