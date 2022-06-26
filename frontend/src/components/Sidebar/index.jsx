import { Button, Flex } from "@chakra-ui/react";
import { BiLogOut } from 'react-icons/bi';
import { useAuth } from "../../contexts/auth";

import { SidebarButton } from "./SidebarButton";

export function Sidebar() {
  const { signOut } = useAuth()

  return (
    <Flex direction="column" my={10} mx={2} justify="space-between">
      <Flex direction="column" gap="1">
        <SidebarButton method="word-frequency" />
        <SidebarButton method="word-sentences" />
        <SidebarButton method="top-words" />
      </Flex>

      <Button
        fontSize="xl"
        fontWeight="400"
        leftIcon={<BiLogOut />}
        onClick={() => signOut()}
      >
        Sair
      </Button>
    </Flex>
  )
}