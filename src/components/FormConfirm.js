import React from 'react'
import {
  MuiThemeProvider,
  RaisedButton
} from 'material-ui'

const FormConfirm = ({ step }) => {
  const handlePrevClick = () => {
    step(-1)
  }

  const handleNextClick = () => {
    step(1)
  }

  return (
    <MuiThemeProvider>
      <div style={{width: '80%', maxWidth:'300px', margin: 'auto'}}>
        <h1 style={{textAlign: 'center'}}>Confirm?</h1>
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

export default FormConfirm
