import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  primaryButton: {
    background: '#F67438',
    color: 'white',
    borderRadius: '25px'
  },
  secondaryButton: {
    border: '1px solid #F67438',
    color: '#F67438',
    borderRadius: '25px'
  }
})

export default function FormSubmitview ({ handleSubmit, togglePreview }) {
  const classes = useStyles()
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%', margin: '0 auto' }}>
      <Button onClick={togglePreview} variant='outlined' className={classes.secondaryButton}>Preview</Button>
      <Button onClick={handleSubmit} variant='contained' className={classes.primaryButton}>Publish</Button>
    </div>
  )
}
