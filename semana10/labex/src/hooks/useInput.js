import { useState } from "react"

export function useInput() {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  return [input, handleInput]
}