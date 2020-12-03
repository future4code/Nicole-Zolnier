import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user'
import { FormControl, FormLabel, Input, Button, Heading } from "@chakra-ui/react"
import { Anchor, FormContainer, LoginContainer, Logo, Message} from './styled'
import alien from '../../assets/alien.svg'
import { goToLogin } from '../../router/coordinator'


function SignUpPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "", username: "" })
  const history = useHistory()

  const handleSubmission = (e) => {
    e.preventDefault()
    signUp(form, history)
    reset()
  }

  return (
    <LoginContainer>
      <Logo src={alien}/>
      <Heading textAlign="center" p="0.2em">Cadastre-se</Heading>
      <FormContainer onSubmit={handleSubmission}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input required placeholder="Crie um username" value={form.username} onChange={onChange} name="username"  />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input required placeholder="Digite seu email" type="email" onChange={onChange} value={form.email} name="email" />
        </FormControl>
        <FormControl id='password'>
          <FormLabel>Senha</FormLabel>
          <Input required placeholder="Digite uma senha" type={"password"} value={form.password} onChange={onChange} name="password" />
        </FormControl>
        <Button colorScheme="teal" variant="solid" type="submit">CADASTRAR</Button>
      </FormContainer>
      <Message>
      <h1>Já possui conta?</h1>
      <Anchor onClick={() => goToLogin(history)}>Log in!</Anchor>
      </Message>
    </LoginContainer>
  )
}

export default SignUpPage;