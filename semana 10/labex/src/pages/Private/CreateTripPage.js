import axios from 'axios'
import React, { useState } from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { baseUrl } from '../../constants/urls'
import { TextField, InputLabel, MenuItem, FormControl, Select, Button, Typography } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {	MuiPickersUtilsProvider,	KeyboardDatePicker} from '@material-ui/pickers';
import { useHistory } from 'react-router-dom'
import {CreateContainer, CreationForm, useStyles} from '../styles'

function CreateTrip() {
  const history = useHistory()
  const classes = useStyles()
  useProtectedPage()

  const { form, onChange, reset } = useForm({ name: "", planet: "", description:"", duration: ""})
  const [date, setDate] = useState(Date.now)


  const onChangeDate = (d) => {
    setDate(d)
  }

  // função pra criar uma viagem massa
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
          auth: localStorage.getItem("token")
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
    <CreateContainer>
      <NavBarAdmin />
      <Typography variant="h3" className={classes.createTitle}>Create Trip</Typography>
      <CreationForm onSubmit={createTrip}>
        <TextField  required label="Name" variant="outlined" name="name" inputProps={{ pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{6,}" }} value={form.name} onChange={onChange} />
        <FormControl required variant="outlined">
        <InputLabel >Cosmo</InputLabel>
        <Select name="planet" value={form.planet} onChange={onChange}>
        <MenuItem value="">Cosmo</MenuItem>
          {planetsList}
        </Select>
        </FormControl>
        
        <TextField multiline variant="outlined" required name="description" label="Description" inputProps={{ pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}" }} value={form.description} onChange={onChange}/>
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

        
      </CreationForm>

    </CreateContainer>
  )
}

export default CreateTrip;
