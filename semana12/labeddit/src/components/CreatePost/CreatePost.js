import React from 'react'
import { useForm } from '../../hooks/useForm';
import { createPost } from '../../services/feed'
import { FormControl, Textarea, Input, Button, Heading } from "@chakra-ui/react"
import { Avatar, FormContainer, LoginContainer, StyledBox, UserThings } from './styled';



function CreatePost(props) {
    const { form, onChange, reset } = useForm({ text: "", title: "" })
    const username = localStorage.getItem("username")

    const handleSubmission = (e) => {
        e.preventDefault()
        createPost(form, props.update)
        reset()
    }
    

    return (<StyledBox borderWidth="1px" borderRadius="lg">
        <LoginContainer>
            <UserThings>
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`} />
                <Heading size="xs" pl="0.4em">u/{username}</Heading>
            </UserThings>
            <Heading size="lg" textAlign="center" pb="0.2em">Crie seu post</Heading>
            <FormContainer onSubmit={handleSubmission}>
                <FormControl id="title">
                    <Input required placeholder="Insira um título para o seu post" onChange={onChange} value={form.title} name="title" />
                </FormControl>
                <FormControl id="text">
                    <Textarea borderRadius="lg" size="sm" required placeholder="Insira o texto do seu post" onChange={onChange} value={form.text} name="text" />
                </FormControl>
                <Button colorScheme="blue" variant="solid" type="submit">POSTAR</Button>
            </FormContainer>
        </LoginContainer>
    </StyledBox>
    )
}

export default CreatePost;