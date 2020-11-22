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
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
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
      window.alert("Trip created!")
      reset()
      history.push("/admin")
    }).catch((err) => {
      console.log(err)
      window.alert("Whoops! Something went wrong")
    })
  }

  const planets = ["Mercury", "Venus", "Moon", "Mars", "Jupiter", "Saturn", "Titan, Saturn moon" , "Uranus", "Neptune", "Pluto", "Asteroid Belt", "Black Hole"]
	const planetsList = planets.map((planet, id) => (
			<MenuItem key={id} value={planet}>{planet}</MenuItem>
		))

  return (
    <Container>
      <NavBarAdmin />
      <Typography variant="h3" className={classes.title}>Create Trip</Typography>
      <FormContainer onSubmit={createTrip}>
        <TextField  required label="Name" variant="outlined" name="name" inputProps={{ pattern: "[a-zA-Zs\À-ú ]{6,}" }} value={form.name} onChange={onChange} />
        <FormControl required variant="outlined">
        <InputLabel >Cosmo</InputLabel>
        <Select name="planet" value={form.planet} onChange={onChange}>
        <MenuItem value="">Cosmo</MenuItem>
          {planetsList}
        </Select>
        </FormControl>
        
        <TextField multiline variant="outlined" required name="description" label="Description" inputProps={{ pattern: "^.{30,}" }} value={form.description} onChange={onChange}/>
        <TextField variant="outlined" required name="duration" type="number" inputProps={{ min: "50", step: "1" }} label="Duration" value={form.duration} onChange={onChange} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
              disableToolbar
              variant="inline"
							format="dd/MM/yyyy" required
							label="Trip's date"
							value={date} onChange={onChangeDate}
						/>
					</MuiPickersUtilsProvider>
        <Button className={classes.create} type={'submit'} variant="contained" color="secondary">CREATE</Button>

        
      </FormContainer>

    </Container>
  )
}

export default CreateTrip;
