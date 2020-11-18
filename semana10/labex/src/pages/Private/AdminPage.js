import React from 'react'
import { useHistory } from 'react-router-dom';
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {useTripsList} from '../../hooks/useTripsList'


function AdminPage() {
  const [trips, loaded] = useTripsList()
  useProtectedPage()

  const history = useHistory();

  const goToDetails = (id) => {
    history.push(`/admin/viagens/detalhe/${id}`);
  };
  
  const goToCreationMode = () => {
    history.push("/admin/viagens/criar-viagem")
  }


  return (
    <div>
      <NavBarAdmin />
        <h1>Bem-vinde!</h1>
        <h3>Viagens:</h3>
        <div>
        {trips.map((item) => {
          return <p onClick={() => goToDetails(item.id)} key={item.id}>{item.name}</p>
        })}
        </div>
        <button onClick={goToCreationMode}>Criar mais viagens</button>
    </div>
  );
}

export default AdminPage;