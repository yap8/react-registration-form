import React from 'react'
import {
  MuiThemeProvider,
  TextField,
  RaisedButton,
} from 'material-ui'

const FormDetails = ({ name, email, handleChange, step }) => {
  
  const isValidEmail = (str) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(str)
  }

  const handleNextClick = () => {
    if (name.length > 6 && isValidEmail(email)) {
      step(1)
    }
  }

  return (
    <MuiThemeProvider>
      <div style={{width: '80%', maxWidth:'300px', margin: 'auto'}}>
        <TextField
          style={{width: '100%'}}
          hintText="Enter name..."
          floatingLabelText="Name"
          name="name"
          defaultValue={name}
          onChange={handleChange} 
        />
        <br />
        <TextField
          style={{width: '100%'}}
          hintText="Enter email..."
          floatingLabelText="Email"
          type="email"
          name="email"
          defaultValue={email} 
          onChange={handleChange} 
        />
        <br />
        <RaisedButton 
          style={{width: '100%', maxWidth: '300px'}}
          label='Continue'
          primary={true}
          onClick={handleNextClick}
        />
      </div>
    </MuiThemeProvider>
  )
}

export default FormDetails
