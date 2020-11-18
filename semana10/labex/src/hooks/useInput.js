import { useState } from "react"

export function useInput(initialState) {
  const [input, setInput] = useState(initialState);

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const resetInput = () => {
    setInput(initialState)
  }

  return [input, handleInput, resetInput]
}
