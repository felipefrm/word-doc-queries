import { createContext, useState, useContext } from 'react'

const MethodsContext = createContext({})

export const MethodsProvider = ({ children }) => {
  const [selectedMethod, setSelectedMethod] = useState("word-frequency")

  return (
    <MethodsContext.Provider value={{ selectedMethod, setSelectedMethod }}>
      {children}
    </MethodsContext.Provider>
  )
}

export function useMethods() {
  return useContext(MethodsContext)
}

export const methods = {
  "word-frequency": 'Método 1',
  "word-sentences": 'Método 2',
  "top-words": 'Método 3',
}