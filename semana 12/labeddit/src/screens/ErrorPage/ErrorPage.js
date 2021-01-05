import { Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { MainContainer } from './styled'

function ErrorPage() {
  return (
    <MainContainer>
      <Heading size="xl">Ops, não tem nada aqui!</Heading>
      <Text p="1em" fontSize="xl" textAlign="center">O que você estava procurando não existe nesse endereço. <br></br>
      A não ser que você estava procurando por essa página de erro, nesse caso: <br></br> Parabéns! Você a encontrou!</Text>
    </MainContainer>
  );
}

export default ErrorPage;