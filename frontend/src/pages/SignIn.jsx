import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

import bgImg from '../../assets/images/bg.jpg'

export function SignIn() {
  return (
    <Center
      bgImage={bgImg}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      h="100vh"
    >
      <Flex
        bgColor="white"
        direction="column"
        w="527px"
        pb="34px"
        borderRadius={8}
      >
        <Stack spacing={12}>
          <Box>
            <Heading fontSize="xl" p="32px">Login</Heading>
            <Divider />
          </Box>
          <Flex px="56px" direction="column" gap="16">
            <Stack spacing={10}>
              <Stack spacing={4}>
                <Text ml={4} fontWeight={500} fontSize="lg">E-mail</Text>
                <Input
                  placeholder="Digite seu e-mail"
                  size="lg"
                  focusBorderColor="black"
                />
              </Stack>
              <Stack spacing={4}>
                <Text ml={4} fontWeight={500} fontSize="lg">Senha</Text>
                <Input
                  placeholder="Digite sua senha"
                  size="lg"
                  focusBorderColor="black"
                />
              </Stack>
            </Stack>
            <Button bgColor="blue.600" color="white" size="lg">Entrar</Button>
          </Flex>
        </Stack>
      </Flex >
    </Center >
  )
}