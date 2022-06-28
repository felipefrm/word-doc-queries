import { FormLabel, Input } from "@chakra-ui/react";

export function InputMethod({ id, label, register, ...rest }) {
  return (
    <>
      <FormLabel htmlFor={id} fontSize="xl">{label}</FormLabel>
      <Input
        id={id}
        type="text"
        size="lg"
        maxW={400}
        borderRadius={4}
        focusBorderColor="black"
        {...register}
        {...rest}
      />
    </>
  )
}