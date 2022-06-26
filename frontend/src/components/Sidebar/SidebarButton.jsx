import { Button } from "@chakra-ui/react";
import { methods, useMethods } from "../../contexts/methods";

export function SidebarButton({ method }) {
  const { selectedMethod, setSelectedMethod } = useMethods()

  const isSelected = selectedMethod === method

  return (
    <Button
      color={isSelected ? "black" : "white"}
      bg={isSelected && "white"}
      _hover={{
        backgroundColor: !isSelected && "white",
        color: !isSelected && "black"
      }}
      variant="ghost"
      px="7"
      py="2.5"
      onClick={() => setSelectedMethod(method)}
    >
      {methods[method]}
    </Button>
  )
}