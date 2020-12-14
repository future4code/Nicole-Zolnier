import React from 'react'
import { useForm } from '../../hooks/useForm'
import { createComment } from '../../services/feed'
import { Avatar, CreateContainer, FormContainer, UserThings } from './styled'
import { FormControl, Button, Textarea, Heading } from "@chakra-ui/react"

function CreateComment(props) {
    const { form, onChange, reset } = useForm({ text: "" })
    const username = localStorage.getItem("username")

    const handleSubmission = (e) => {
        e.preventDefault()
        createComment(form, props.id, props.update)
        reset()
    }


    return (<CreateContainer>
        <UserThings>
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`} />
            <Heading size="xs" pl="0.4em">u/{username}</Heading>
        </UserThings>
        <FormContainer onSubmit={handleSubmission}>
            <FormControl id="text">
                <Textarea required placeholder="Insira um comentário" onChange={onChange} value={form.text} name="text" />
            </FormControl>
            <Button p="1.5em" colorScheme="blue" variant="solid" type="submit">COMENTAR</Button>
        </FormContainer>
    </CreateContainer>

    )
}

export default CreateComment;