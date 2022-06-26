import { Flex } from "@chakra-ui/react";
import { SidebarButton } from "./SidebarButton";

export function Sidebar() {
  return (
    <Flex direction="column" gap="1" my={10} mx={2}>
      <SidebarButton method="word-frequency" />
      <SidebarButton method="word-sentences" />
      <SidebarButton method="top-words" />
    </Flex>
  )
}