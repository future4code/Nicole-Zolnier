import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { login } from '../../services/user'
import { FormControl, FormLabel, Input, Button, Heading, InputLeftElement, InputGroup } from "@chakra-ui/react"
import { LockIcon, EmailIcon } from '@chakra-ui/icons'
import { Anchor, FormContainer, LoginContainer, Logo, Message, MainContainer } from './styled'
import alien from '../../assets/alien.svg'
import { goToSignUp } from '../../router/coordinator'

function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSubmission = (e) => {
    e.preventDefault()
    login(form, history, setLoading)
    reset()
  }

  return (
    <MainContainer>
      <LoginContainer borderWidth="1px" borderRadius="lg">
        <Logo src={alien} />
        <Heading textAlign="center" p="0.2em">Log in</Heading>
        <FormContainer onSubmit={handleSubmission}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input required placeholder="Digite seu email" type="email" onChange={onChange} value={form.email} name="email" />
            </InputGroup>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input required placeholder="Digite sua senha" type="password" value={form.password} onChange={onChange} name="password" />
            </InputGroup>
          </FormControl>
          <Button isLoading={loading} colorScheme="teal" variant="solid" type="submit">Login</Button>
        </FormContainer>
        <Message>
          <h1>Novo ao Greenddit?</h1>
          <Anchor onClick={() => goToSignUp(history)}>Cadastre-se!</Anchor>
        </Message>
      </LoginContainer>
    </MainContainer>

  );
}

export default LoginPage;