import axios from 'axios'
import React from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import Planets from '../../components/Private/Planets'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { baseUrl } from '../../constants/urls'

function CreateTrip() {

  useProtectedPage()

  const token = localStorage.getItem("token")
  const { form, onChange, reset } = useForm({ name: "", planet: "", date:"", description:"", duration: ""})

  const handleInputChange = (event) => {
    const { value, name } = event.target

    onChange(value, name)
  }

  const createTrip = (e) => {
    e.preventDefault()
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration
    }
    axios.post(`${baseUrl}/trips`, body, {
      headers: {
        auth: token
      }
    }).then(() => {
      window.alert("deu boa")
      reset()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <NavBarAdmin />
      <p>criar viagem</p>
      <form onSubmit={createTrip}>
        <input required placeholder="nome" name="name" pattern="^.{6,}" value={form.name} onChange={handleInputChange} />
        <Planets planet={form.planet} handle={handleInputChange} />
        <input required name="date" type="date" placeholder="data" value={form.date} onChange={handleInputChange}/>
        <input required name="description" placeholder="descrição" pattern="^.{30,}" value={form.description} onChange={handleInputChange}/>
        <input required name="duration" type="number" min="50" placeholder="duração" value={form.uration} onChange={handleInputChange} />
        <button>criar</button>
      </form>

    </div>
  )
}

export default CreateTrip;
