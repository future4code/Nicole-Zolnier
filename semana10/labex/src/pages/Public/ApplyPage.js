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

  const handleInputChange = (event) => {
    const { value, name } = event.target

    onChange(value, name)
  }

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
      console.log(err)
    })

  }  
  return (
    
    <div>
        <NavBar />
        <p>Apply</p>
        <form onSubmit={applyToTrip}>
          <input placeholder="nome" value={form.name} onChange={handleInputChange} name="name"
          type="text"
          pattern={"[A-Za-z]{3,}"}
          required/>
          <input placeholder="idade" value={form.age} onChange={handleInputChange}  name="age" type="number"
          min="18"
          required/>
          <input pattern={"^.{30,}"} required placeholder="por que" name="reason" value={form.reason} onChange={handleInputChange}/>
          <input required  pattern={"^.{10,}"} placeholder="profissao" name="profession" value={form.profession} onChange={handleInputChange} />
          <Countries country={form.country} handle={handleInputChange}/>

          <select name="tripId" value={form.tripId} onChange={handleInputChange}>
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