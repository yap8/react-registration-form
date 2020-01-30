import React, { useState } from 'react'

import FormDetails from './FormDetails'
import FormPassword from './FormPassword'
import FormConfirm from './FormConfirm'
import { MuiThemeProvider } from 'material-ui/styles'
import { AppBar } from 'material-ui'
import FormSuccess from './FormSuccess'

const Form = () => {
  const [state, setState] = useState({
    step: 1,
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })

  const step = (value) => {
    const { step } = state

    setState({
      ...state,
      step: step + value
    })
  }

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value
    })
  }

  let output

  switch (state.step) {
    case 1:
      output =  
        <FormDetails 
          name={state.name}
          email={state.email} 
          handleChange={handleChange}
          step={step} 
        />
      break
    case 2:
      output = 
        <FormPassword 
          password={state.password}
          passwordRepeat={state.passwordRepeat}
          handleChange={handleChange}
          step={step}
        />
      break
    case 3:
      output = 
        <FormConfirm
          name={state.name}
          email={state.email}
          step={step}
        />
      break
    case 4:
      output = 
        <FormSuccess />
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Registration Form" />
        {output}
      </React.Fragment>
    </MuiThemeProvider>
  )
}

export default Form
