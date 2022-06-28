import { FormLabel, Input, Stack } from "@chakra-ui/react";

export function InputSignIn({ id, label, placeholder, register }) {
  return (
    <Stack spacing={2}>
      <FormLabel
        htmlFor={id}
        ml={4}
        fontWeight={500}
        fontSize="xl"
      >
        {label}
      </FormLabel>
      <Input
        type={id}
        id={id}
        placeholder={placeholder}
        size="lg"
        borderRadius={4}
        focusBorderColor="black"
        {...register(id, {
          required: 'Campo obrigatório'
        })}
      />
    </Stack>
  )
}