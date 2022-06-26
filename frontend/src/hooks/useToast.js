import { useToast as useToastChakra } from "@chakra-ui/react";

const defaultConfigs = {
  isClosable: true,
  position: 'bottom-left',
}

export function useToast() {
  const toast = useToastChakra()

  return {
    success: ({ title, description = null }) => toast({
      title,
      description,
      status: 'success',
      ...defaultConfigs,
    }),

    error: ({ title, description = null }) => toast({
      title,
      description,
      status: 'error',
      ...defaultConfigs
    }),

    info: ({ title, description = null }) => toast({
      title,
      description,
      status: 'info',
      ...defaultConfigs
    })
  }
}