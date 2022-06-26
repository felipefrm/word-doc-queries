import { FormLabel, Input as InputChakra, Stack } from "@chakra-ui/react";

export function Input({ id, label, placeholder, register }) {
  return (
    <Stack spacing={4}>
      <FormLabel
        htmlFor={id}
        ml={4}
        fontWeight={500}
        fontSize="lg"
      >
        {label}
      </FormLabel>
      <InputChakra
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