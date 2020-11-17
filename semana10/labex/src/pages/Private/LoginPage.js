import React from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar'

function LoginPage() {
  const history = useHistory()

  const goToAdmin = () => {
    history.push("/admin")
  }

  return (
    <div>
        <NavBar />
        <p>login</p>
        <button onClick={goToAdmin}>LOGAR</button>
    </div>
  );
}

export default LoginPage;