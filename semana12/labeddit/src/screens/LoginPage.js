import React from 'react'
import { useForm } from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { login } from '../services/user'


function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const history = useHistory()

  const handleSubmission = (e) => {
    e.preventDefault()
    login(form, history)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input type={"email"} onChange={onChange} value={form.email} name="email" />
        <input type={"password"} value={form.password} onChange={onChange} name="password" />
        <button>LOGAR</button>
      </form>
    </div>
  );
}

export default LoginPage;