import axios from 'axios'
import React, { useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { baseUrl } from '../../constants/urls'
import styled from 'styled-components'
import { TextField, InputLabel, MenuItem, FormControl, Select, Button, Typography } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {	MuiPickersUtilsProvider,	KeyboardDatePicker} from '@material-ui/pickers';
import {makeStyles} from '@material-ui/core/styles'

const Container = styled.div`
  background-color: black;
  width: auto;
  height: 100vh;
`


const FormContainer = styled.form`
	padding: 1em;
	margin: auto;
	margin-bottom: 3em;
	display: flex;
	flex-direction: column;
	gap: 1.2em;
  width: 30vw;
  background-color: white;
  border-radius: 5px;
`

const useStyles = makeStyles({
  create: {
      color: "white",
      background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
      padding: "0.5em",
      fontSize: "1.2rem"
  },
  title: {
    color: "white",
    textAlign: "center",
    padding: "1em",
  },
  input: {
    color: "white",
    borderColor: "white"
  }
});



function CreateTrip() {
  const classes = useStyles()
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
    <Container>
      <NavBarAdmin />
      <Typography variant="h3" className={classes.title}>Criar Viagem</Typography>
      <FormContainer onSubmit={createTrip}>
        <TextField  required label="Nome" variant="outlined" name="name" inputProps={{ pattern: "[a-zA-Zs\À-ú ]{6,}" }} value={form.name} onChange={onChange} />
        <FormControl required variant="outlined">
        <InputLabel >Planeta</InputLabel>
        <Select name="planet" value={form.planet} onChange={onChange}>
        <MenuItem value="">Planeta</MenuItem>
          {planetsList}
        </Select>
        </FormControl>
        
        <TextField variant="outlined" required name="description" label="Descrição" inputProps={{ pattern: "^.{30,}" }} value={form.description} onChange={onChange}/>
        <TextField variant="outlined" required name="duration" type="number" inputProps={{ min: "50", step: "1" }} label="Duração" value={form.duration} onChange={onChange} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
              disableToolbar
              variant="inline"
							format="dd/MM/yyyy" required
							label="Data da Viagem"
							value={date} onChange={onChangeDate}
						/>
					</MuiPickersUtilsProvider>
        <Button className={classes.create} type={'submit'} variant="contained" color="secondary">CRIAR</Button>

        
      </FormContainer>

    </Container>
  )
}

export default CreateTrip;
