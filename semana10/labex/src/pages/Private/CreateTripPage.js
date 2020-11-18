import React from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import { useProtectedPage } from '../../hooks/useProtectedPage';


function CreateTrip() {

  useProtectedPage()

  return (
    <div>
        <NavBarAdmin />
        <p>criar viagem</p>
        <input placeholder="nome" />
        <input placeholder="planeta" />
        <input placeholder="data" />
        <input placeholder="descrição" />
        <input placeholder="duração" />
    </div>
  );
}

export default CreateTrip;