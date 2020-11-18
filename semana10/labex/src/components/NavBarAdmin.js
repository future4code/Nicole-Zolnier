import React from 'react'
import { useHistory } from 'react-router-dom'

function NavBarAdmin() {
  const history = useHistory()

  const goToHome = () => {
    localStorage.removeItem("token");
    history.push("/")
  }

  const goToAdmin = () => {
    history.push("/admin")
  }

  const goToCandidates = () => {
    history.push("/admin/candidatos")
  }
  
  const goToTrips = () => {
    history.push("/admin/viagens")
  }

  const goToCreateTrip = () => {
    history.push("/admin/viagens/criar-viagem")
  }

  return (
    <div>
        <button onClick={goToAdmin}>Admin</button>
        <button onClick={goToTrips}>Viagens</button>
        <button onClick={goToCreateTrip}>Criar Viagens</button>
        <button onClick={goToCandidates}>Candidatos</button>
        <button onClick={goToHome}>Logout</button>
    </div>
  );
}

export default NavBarAdmin;