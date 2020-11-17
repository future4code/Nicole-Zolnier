import React from 'react'
import NavBar from '../components/NavBar'

function ErrorPage() {
  return (
    <div>
        <NavBar />
        <h1>Ops, não tem nada aqui</h1>
        <p>O que você estava procurando não existe nesse endereço. A não ser que você estava procurando por essa página de erro, nesse caso: Parabéns! Você a encontrou!</p>
    </div>
  );
}

export default ErrorPage;