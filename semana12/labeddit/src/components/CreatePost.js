import React from 'react'
import { useForm } from '../hooks/useForm';
import { createPost } from '../services/feed'

function CreatePost() {
    const { form, onChange, reset } = useForm({text: "", title: ""})

    const handleSubmission = (e) => {
        e.preventDefault()
        createPost(form)
        reset()
    }
    return (<div>
        <h2>Crie seu post</h2>
        <form onSubmit={handleSubmission}>
            <input placeholder="titulo" onChange={onChange} value={form.title} name="title" />
            <input placeholder="texto" onChange={onChange} value={form.text} name="text" />
            <button>POSTAR</button>
        </form>
    </div>

    )
}

export default CreatePost;