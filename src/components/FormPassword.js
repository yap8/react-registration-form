import React from 'react'
import { 
  MuiThemeProvider,
  TextField,
  RaisedButton,
} from 'material-ui'

const FormPassword = ({ password, passwordRepeat, handleChange, step }) => {
  const handlePrevClick = () => {
    step(-1)
  }
  
  const handleNextClick = () => {
    if (password.length > 8 && password === passwordRepeat) {
      step(1)
    }
  }

  return (
    <MuiThemeProvider>
      <div style={{width: '80%', maxWidth:'300px', margin: 'auto'}}>
        <TextField
          style={{width: '100%'}}
          hintText="Enter password..."
          floatingLabelText="Password"
          type="password"
          name="password"
          defaultValue={password}
          onChange={handleChange} 
          />
        <br />
        <TextField 
          style={{width: '100%'}}
          hintText="Repeat password..."
          floatingLabelText="Repeat password"
          type="password"
          name="passwordRepeat"
          defaultValue={passwordRepeat}
          onChange={handleChange} 
        />
        <br />
        <RaisedButton 
          style={{width: '49%', marginRight: '2%'}}
          label='Go back'
          onClick={handlePrevClick}
        />
        <RaisedButton 
          style={{width: '49%'}}
          label='Continue'
          primary={true}
          onClick={handleNextClick}
        />
      </div>
    </MuiThemeProvider>
  )
}

export default FormPassword
