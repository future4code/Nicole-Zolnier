import axios from 'axios'
import React from 'react'
import NavBar from '../../components/NavBar'
import {baseUrl} from '../../constants/urls'
import { useForm } from '../../hooks/useForm'
import {useTripsList} from '../../hooks/useTripsList'
import Countries from '../../components/Countries'

function ApplyPage() {
  const [trips, loaded] = useTripsList()
  const { form, onChange, reset } = useForm({ name: "", age: "", reason:"", profession:"", country:"", tripId: null })

  const applyToTrip = () => {
    
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.reason,
      profession: form.profession,
      country: form.country,
      trip: form.tripId
    }

    axios.post(`${baseUrl}/trips/${form.tripId}/apply`, body).then(() => {
      window.alert(`Formulário enviado com sucesso! Entraremos em contato ${form.name}`)
      reset()
    }).catch((err) => {
      window.alert(`Vish, ${form.name}, algum erro aconteceu!`)
      console.log(err)
    })

  }  
  return (
    
    <div>
        <NavBar />
        <p>Apply</p>
        <form onSubmit={applyToTrip}>
          <input placeholder="nome" value={form.name} onChange={onChange} name="name"
          type="text"
          pattern="[a-zA-Z\À-ú ]{3,}"
          required/>
          <input placeholder="idade" value={form.age} onChange={onChange}  name="age" type="number"
          min="18"
          required/>
          <input pattern={"^.{30,}"} required placeholder="por que" name="reason" value={form.reason} onChange={onChange}/>
          <input required  pattern={"[a-zA-Z\À-ú ]{10,}"} placeholder="profissao" name="profession" value={form.profession} onChange={onChange} />
          <Countries country={form.country} handle={onChange}/>

          <select name="tripId" value={form.tripId} onChange={onChange}>
          <option value="">viagens</option>
          {trips.map((item) => {
            return <option value={item.id}>{item.name}</option>
          })}
          </select>

        <button>Aplicar</button>
        </form>
    </div>
  );
}

export default ApplyPage;