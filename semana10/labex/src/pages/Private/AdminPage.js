import React from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'
import { useProtectedPage } from '../../hooks/useProtectedPage';


function AdminPage() {
  useProtectedPage()
  return (
    <div>
      <NavBarAdmin />
        <p>Admin</p>
    </div>
  );
}

export default AdminPage;