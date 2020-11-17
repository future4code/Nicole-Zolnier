import React from 'react'
import NavBar from '../../components/NavBar'

function ApplyPage() {
  return (
    <div>
        <NavBar />
        <p>Apply</p>
        <input placeholder="nome" />
        <input placeholder="idade" />
        <input placeholder="por que" />
        <input placeholder="profissao" />
        <input placeholder="país" />
        <button>Aplicar</button>
    </div>
  );
}

export default ApplyPage;