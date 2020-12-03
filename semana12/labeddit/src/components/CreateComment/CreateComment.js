import React from 'react'
import { useForm } from '../../hooks/useForm'
import { createComment } from '../../services/feed'
import { CreateContainer, FormContainer } from './styled'
import { FormControl, Button, Textarea} from "@chakra-ui/react"

function CreateComment(props) {
    const { form, onChange, reset } = useForm({ text: "" })

    const handleSubmission = (e) => {
        e.preventDefault()
        createComment(form, props.id, props.update)
        reset()
    }
    return (<CreateContainer>
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