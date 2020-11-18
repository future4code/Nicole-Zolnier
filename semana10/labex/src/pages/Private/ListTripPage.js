import React from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import { useProtectedPage } from '../../hooks/useProtectedPage';


function ListTrip() {

  useProtectedPage()
  
  return (
    <div>
        <NavBarAdmin />
        <p>as trips</p>
    </div>
  );
}

export default ListTrip;