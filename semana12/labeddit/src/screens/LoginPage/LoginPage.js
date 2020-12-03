import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { login } from '../../services/user'
import { FormControl, FormLabel, Input, Button, Heading } from "@chakra-ui/react"
import { Anchor, FormContainer, LoginContainer, Logo, Message } from './styled'
import alien from '../../assets/alien.svg'
import { goToSignUp } from '../../router/coordinator'

function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const history = useHistory()

  const handleSubmission = (e) => {
    e.preventDefault()
    login(form, history)
    reset()
  }

  return (
    <LoginContainer>
      <Logo src={alien}/>
      <Heading textAlign="center" p="0.2em">Log in</Heading>
      <FormContainer onSubmit={handleSubmission}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input required placeholder="Digite seu email" type="email" onChange={onChange} value={form.email} name="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Senha</FormLabel>
          <Input required placeholder="Digite sua senha" type="password" value={form.password} onChange={onChange} name="password" />
        </FormControl>
        <Button colorScheme="teal" variant="solid" type="submit">Login</Button>
      </FormContainer>
      <Message>
      <h1>Novo ao Greenddit?</h1>
      <Anchor onClick={() => goToSignUp(history)}>Cadastre-se!</Anchor>
      </Message>
    </LoginContainer>
  );
}

export default LoginPage;