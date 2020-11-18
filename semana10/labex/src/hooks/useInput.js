import { useState } from "react"

export function useInput(initialState) {
  const [input, setInput] = useState(initialState);

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  return [input, handleInput]
}
