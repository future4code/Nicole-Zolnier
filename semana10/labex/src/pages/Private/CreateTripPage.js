import axios from 'axios'
import React from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useInput } from '../../hooks/useInput'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { baseUrl } from '../../constants/urls'


function CreateTrip() {

  useProtectedPage()

  const token = localStorage.getItem("token")
  const [name, handleName, resetName] = useInput("")
  const [planet, handlePlanet, resetPlanet] = useInput("")
  const [date, handleDate, resetDate] = useInput("")
  const [description, handleDescription, resetDescription] = useInput("")
  const [duration, handleDuration, resetDuration] = useInput(0)

  const createTrip = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: duration
    }
    axios.post(`${baseUrl}/trips`, body, {
      headers: {
        auth: token
      }
    }).then(() => {
      window.alert("deu boa")
      resetName()
      resetDuration()
      resetPlanet()
      resetDescription()
      resetDate()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <NavBarAdmin />
      <p>criar viagem</p>
      <input placeholder="nome" value={name} onChange={handleName} />
      <input placeholder="planeta" value={planet} onChange={handlePlanet}/>
      <input type="date" placeholder="data" value={date} onChange={handleDate}/>
      <input placeholder="descrição" value={description} onChange={handleDescription}/>
      <input type="number" placeholder="duração" value={duration} onChange={handleDuration} />
      <button onClick={createTrip}>criar</button>
    </div>
  );
}

export default CreateTrip;

//   const applyToTrip = () => {

//     const body = {
//       name: name,
//       age: age,
//       applicationText: reason,
//       profession: profession,
//       country: country
//     }

//     axios.post(`${baseUrl}/trips/${tripId}/apply`, body).then(() => {
//       window.alert(`Formulário enviado com sucesso! Entraremos em contato ${name}`)
//       resetName()
//       resetAge()
//       resetReason()
//       resetProfession()
//       resetCountry()
//       resetTripId()
//     }).catch((err) => {
//       console.log(err)
//     })

//   }  