import React from 'react'
import { useForm } from '../hooks/useForm';
import { createComment } from '../services/feed';

function CreateComment(props) {
    const { form, onChange, reset } = useForm({text: ""})

    const handleSubmission = (e) => {
        e.preventDefault()
        createComment(form, props.id, props.update )
        reset()
    }
    return (<div>
        <form onSubmit={handleSubmission}>
            <input placeholder="texto" onChange={onChange} value={form.text} name="text"/>
            <button>COMENTAR</button>
        </form>
    </div>

    )
}

export default CreateComment;