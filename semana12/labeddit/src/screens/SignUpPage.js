import React from 'react'
import { useForm } from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../services/user'

function SignUpPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "", username: "" })
  const history = useHistory()

  const handleSubmission = (e) => {
    e.preventDefault()
    signUp(form, history)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input type={"text"} value={form.username} onChange={onChange} name="username" />
        <input type={"email"} onChange={onChange} value={form.email} name="email" />
        <input type={"password"} value={form.password} onChange={onChange} name="password" />
        <button>CADASTRAR</button>
      </form>
    </div>
  )
}

export default SignUpPage;