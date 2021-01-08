import React, { useState } from 'react'
import Router from './router/Router'
import { ChakraProvider } from "@chakra-ui/react"
import SearchContext from './context/SearchContext'



function App() {
  const [search, setSearch] = useState("")

  const input = {search, setSearch}
  return (
    <SearchContext.Provider value={input}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </SearchContext.Provider>
  );
}

export default App;
