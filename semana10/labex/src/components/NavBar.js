import React from 'react'
import { useHistory } from 'react-router-dom'

function NavBar() {
  const history = useHistory()

  const goToHome = () => {
    history.push("/")
  }

  const goToAboutUs = () => {
    history.push("/sobre")
  }

  const goToLogin = () => {
    history.push("/login")
  }
  
  const goToApply = () => {
    history.push("/inscricao")
  }

  const goToTrips = () => {
    history.push("/viagens")
  }

  return (
    <div>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToAboutUs}>Sobre nós</button>
        <button onClick={goToApply}>Inscreva-se</button>
        <button onClick={goToTrips}>Viagens</button>
        <button onClick={goToLogin}>Admin</button>
    </div>
  );
}

export default NavBar;