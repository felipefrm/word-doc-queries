import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom";

import { InputSignIn as Input } from "../components/Forms/InputSignIn";
import { useAuth } from "../contexts/auth";
import { useToast } from "../hooks/useToast";

import bgImg from '../../assets/images/bg.png'

export function SignIn() {
  const toast = useToast()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const { signIn, signed } = useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (signed) navigate("/")
  }, [signed])

  const onSubmit = async (data) => {
    const credentials = {
      email: data.email,
      password: data.password
    }

    signIn(credentials, (success, err) => {
      if (err) {
        toast.error({ title: err })
      }
      else {
        toast.success({ title: success })
        navigate(from, { replace: true })
      }
    })
  };

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
            <Heading fontSize="2xl" px="8" py="7">Login</Heading>
            <Divider />
          </Box>
          <Flex
            as="form"
            px="56px"
            direction="column"
            gap="16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl >
              <Stack spacing={10}>
                <Input
                  id="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  register={register}
                />
                <Input
                  id="password"
                  label="Senha"
                  placeholder="Digite sua senha"
                  register={register}
                />
              </Stack>
            </FormControl>
            <Button
              bgColor="blue.600"
              color="white"
              size="lg"
              fontSize="xl"
              type="submit"
              isLoading={isSubmitting}
            >
              Entrar
            </Button>
          </Flex>
        </Stack>
      </Flex >
    </Center >
  )
}