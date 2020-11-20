import axios from 'axios'
import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { baseUrl } from '../../constants/urls'
import { useForm } from '../../hooks/useForm'
import { useTripsList } from '../../hooks/useTripsList'
import Footer from '../../components/Footer'
import { TextField, InputLabel, MenuItem, FormControl, Select, Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styled from 'styled-components'

const FormContainer = styled.form`
	padding: 1em;
	margin: auto;
	margin-bottom: 3em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	width: 30vw;
`
const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#67C7EB"
    }
  },
})


function ApplyPage() {
  const [trips, loaded] = useTripsList()
  const { form, onChange, reset } = useForm({ name: "", age: "", reason: "", profession: "", country: "", tripId: "" })
  const [countries, setCountries] = useState()

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data)
    })
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
      window.alert(`Vish, ${form.name}, algum erro aconteceu!`)
      console.log(err)
    })

  }
  return (

    <div>
      <NavBar />
      <p>Apply</p>
      <FormContainer autoComplete="off" validate onSubmit={applyToTrip}>

        <TextField label="Nome" value={form.name} onChange={onChange} name="name"
          inputProps={{ pattern: "[a-zA-ZÀ-ú ]{3,}" }}
          required variant="outlined" />
        <TextField variant="outlined" label="Idade" value={form.age} onChange={onChange} name="age" type="number"
          inputProps={{ min: "18", step: "1" }}
          required />
        <TextField label="Por que você seria um bom candidato?" name="reason" value={form.reason} onChange={onChange}
          inputProps={{ pattern: "^.{30,}" }}
          required variant="outlined" />
        <TextField variant="outlined" required inputProps={{ pattern: "[a-zA-ZÀ-ú ]{10,}" }} label="Profissao" name="profession" value={form.profession} onChange={onChange} />


        <FormControl variant="outlined">
          <InputLabel>País</InputLabel>
          <Select required label="País" value={form.country} name="country" onChange={onChange} >
            <MenuItem value="">País</MenuItem>
            {countries ? countries.map((item) => {
              return <MenuItem key={item.name}
                value={item.name}>{item.name}</MenuItem>
            }) : <MenuItem>Carregando</MenuItem>}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel>Viagem</InputLabel>
          <Select required label="Viagem" name="tripId" value={form.tripId} onChange={onChange}>
            <MenuItem value="">Viagem</MenuItem>
            {trips.map((item) => {
              return <MenuItem value={item.id}>{item.name}</MenuItem>
            })}
          </Select>
        </FormControl>

        <MuiThemeProvider theme={myTheme}>
          <Button type='submit' color="secondary" variant="contained">Aplicar</Button>
        </MuiThemeProvider>


      </FormContainer>
      <Footer />
    </div>
  );
}

export default ApplyPage;