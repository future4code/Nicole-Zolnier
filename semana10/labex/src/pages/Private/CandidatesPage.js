import React from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import { useProtectedPage } from '../../hooks/useProtectedPage';

function Candidates() {
  useProtectedPage()
  
  return (
    <div>
        <NavBarAdmin />
        <p>Candidates</p>
    </div>
  );
}

export default Candidates;