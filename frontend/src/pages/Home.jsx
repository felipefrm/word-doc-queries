import { Flex } from "@chakra-ui/react";

import { Content } from "../components/Content";
import { Sidebar } from "../components/Sidebar";
import { MethodsProvider } from "../contexts/methods";

import bgImg from '../../assets/images/bg.jpg'

export function Home() {
  return (
    <MethodsProvider>
      <Flex
        bgImage={bgImg}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        h="100vh"
      >
        <Sidebar />
        <Content />
      </Flex>
    </MethodsProvider>
  )
}