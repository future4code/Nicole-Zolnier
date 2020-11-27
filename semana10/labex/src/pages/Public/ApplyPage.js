import axios from 'axios'
import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { baseUrl } from '../../constants/urls'
import { useForm } from '../../hooks/useForm'
import { useTripsList } from '../../hooks/useTripsList'
import Footer from '../../components/Footer/Footer'
import { TextField, InputLabel, MenuItem, FormControl, Select, Button, MuiThemeProvider} from '@material-ui/core'
import {MainContainer, Title, ApplyForm, myTheme} from '../styles'
import { useHistory } from 'react-router-dom'

function ApplyPage() {
  const history = useHistory()
  const [trips, loaded] = useTripsList()
  const { form, onChange, reset } = useForm({ name: "", age: "", reason: "", profession: "", country: "", tripId: "" })
  const [countries, setCountries] = useState()

  useEffect(() => {
    getCountries()
  }, [])

  // função de pegar os paises de uma api doida
  const getCountries = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data)
    })
  }

  // função pra aplicar pra uma viagem
  const applyToTrip = (e) => {
    e.preventDefault()

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.reason,
      profession: form.profession,
      country: form.country,
      trip: form.tripId
    }

    axios.post(`${baseUrl}/trips/${form.tripId}/apply`, body).then(() => {
      alert(`Application sent, ${form.name}, thank you! Keep an eye on your email!`)
      reset()
      history.push("/")
    }).catch((err) => {
      alert(`Oh no, ${form.name}, something went wrong!`)
      console.log(err)
    })

  }

  return (

    <div>
      <NavBar />
      <MainContainer>
      <Title variant="h3">Application Form</Title>
      <Title variant="body1">PS: you can write it in your country's language</Title>
      <ApplyForm autoComplete="off" onSubmit={applyToTrip}>

        <TextField label="Name" value={form.name} onChange={onChange} name="name"
          inputProps={{ pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}" }}
          required variant="outlined" />
        <TextField variant="outlined" label="Age" value={form.age} onChange={onChange} name="age" type="number"
          inputProps={{ min: "18", step: "1" }}
          required />
        <TextField multiline label="Why would you be a good candidate?" name="reason" value={form.reason} onChange={onChange}
          inputProps={{ pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}" }} 
          required variant="outlined" />
        <TextField variant="outlined" required inputProps={{ pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{10,}" }} label="Profession" name="profession" value={form.profession} onChange={onChange} />


        <FormControl variant="outlined">
          <InputLabel>Country of Origin</InputLabel>
          <Select required label="País" value={form.country} name="country" onChange={onChange} >
            <MenuItem value="">Country</MenuItem>
            {countries ? countries.map((item) => {
              return <MenuItem key={item.name}
                value={item.name}>{item.name}</MenuItem>
            }) : <MenuItem>Loading</MenuItem>}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel>Choose a Trip</InputLabel>
          <Select required label="Trip" name="tripId" value={form.tripId} onChange={onChange}>
            <MenuItem value="">Trip</MenuItem>
            {trips.map((item) => {
              return <MenuItem value={item.id}>{item.name}</MenuItem>
            })}
          </Select>
        </FormControl>

        <MuiThemeProvider theme={myTheme}>
          <Button type='submit' color="secondary" variant="contained">Apply</Button>
        </MuiThemeProvider>
      </ApplyForm>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default ApplyPage;