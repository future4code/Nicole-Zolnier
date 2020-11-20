import axios from 'axios'
import React, { useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { baseUrl } from '../../constants/urls'
import styled from 'styled-components'
import { TextField, InputLabel, MenuItem, FormControl, Select, Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {	MuiPickersUtilsProvider,	KeyboardDatePicker} from '@material-ui/pickers';

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


function CreateTrip() {

  useProtectedPage()

  const token = localStorage.getItem("token")

  const { form, onChange, reset } = useForm({ name: "", planet: "", description:"", duration: ""})
  const [date, setDate] = useState(Date.now)


  const onChangeDate = (d) => {
    setDate(d)
  }

  const createTrip = (e) => {
    e.preventDefault()
    const newDate = new Date(date)
    const body = {
      name: form.name,
      planet: form.planet,
      date: newDate.toLocaleDateString(),
      description: form.description,
      durationInDays: form.duration
    }
    axios.post(`${baseUrl}/trips`, body, {
      headers: {
        auth: token
      }
    }).then(() => {
      window.alert("Viagem criada com sucesso!")
      reset()
    }).catch((err) => {
      console.log(err)
      window.alert("Eita! Deu erro")
    })
  }

  const planets = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão"]
	const planetsList = planets.map((planet, id) => (
			<MenuItem key={id} value={planet}>{planet}</MenuItem>
		))

  return (
    <div>
      <NavBarAdmin />
      <p>criar viagem</p>
      <FormContainer  onSubmit={createTrip}>
        <TextField required label="Nome" variant="outlined" name="name" inputProps={{ pattern: "[a-zA-Zs\À-ú ]{6,}" }} value={form.name} onChange={onChange} />
        <FormControl variant="outlined">
        <InputLabel>Planeta</InputLabel>
        <Select required name="planet" value={form.planet} onChange={onChange}>
        <MenuItem value="">Planeta</MenuItem>
          {planetsList}
        </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
              disableToolbar
              variant="inline"
							format="dd/MM/yyyy" required
							label="Data da Viagem"
							value={date} onChange={onChangeDate}
						/>
					</MuiPickersUtilsProvider>
        <TextField variant="outlined" required name="description" label="Descrição" inputProps={{ pattern: "^.{30,}" }} value={form.description} onChange={onChange}/>
        <TextField variant="outlined" required name="duration" type="number" inputProps={{ min: "50", step: "1" }} label="Duração" value={form.duration} onChange={onChange} />
        <MuiThemeProvider theme={myTheme}>
          <Button type={'submit'} variant="contained" color="secondary">CRIAR</Button>
        </MuiThemeProvider>
        
      </FormContainer>

    </div>
  )
}

export default CreateTrip;
