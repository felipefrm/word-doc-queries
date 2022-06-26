import { Flex, Heading } from "@chakra-ui/react";

import { useMethods, methods } from "../../contexts/methods";
import { TopWords } from "./TopWords";
import { WordFrequency } from "./WordFrequency"
import { WordSentences } from "./WordSentences";

export function Content() {
  const { selectedMethod } = useMethods()

  return (
    <Flex bgColor="white" flex={1} py="10" px="14">
      <Flex direction="column" flex={1}>
        <Heading>{methods[selectedMethod]}</Heading>
        {
          selectedMethod === 'word-frequency'
            ? <WordFrequency />
            : selectedMethod === 'word-sentences'
              ? <WordSentences />
              : <TopWords />
        }
      </Flex>

    </Flex>
  )
}