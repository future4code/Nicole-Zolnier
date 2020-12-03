import React from 'react'
import { useForm } from '../../hooks/useForm';
import { createPost } from '../../services/feed'
import { FormControl, Textarea, Input, Button, Heading } from "@chakra-ui/react"
import { FormContainer, LoginContainer, StyledBox } from './styled';



function CreatePost(props) {
    const { form, onChange, reset } = useForm({ text: "", title: "" })

    const handleSubmission = (e) => {
        e.preventDefault()
        createPost(form, props.update)
        reset()
    }

    return (<StyledBox borderWidth="1px" borderRadius="lg">
        <LoginContainer>
            <Heading size="xl" textAlign="center" p="0.2em">Crie seu post</Heading>
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