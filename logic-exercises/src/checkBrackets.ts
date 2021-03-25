export const checkBrackets = (str: string) => {
    const stack = [];

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char)
    } else {
      const lastOpeningChar = stack.pop();
      if(!lastOpeningChar) {
        return false
      } else if (
        (lastOpeningChar === "(" && char !== ")") ||
        (lastOpeningChar === "[" && char !== "]") ||
        (lastOpeningChar === "{" && char !== "}")
      ) {
        return false
      }
    }
  }

  if (stack.length > 0) {
    return false
  }

  return true
}