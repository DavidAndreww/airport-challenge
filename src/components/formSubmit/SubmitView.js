import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { getNum } from '../../utilityFunctions'

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
  },
  dialog: {
    borderRadius: '10px',
    padding: '10px'
  }
})

export default function Submitview ({
  isPreviewOpen,
  handleSubmit,
  togglePreview
}) {
  const classes = useStyles()
  const state = useSelector((state) => state)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%',
        margin: '0 auto'
      }}
    >
      <Button
        onClick={togglePreview}
        variant='outlined'
        className={classes.secondaryButton}
      >
        Preview
      </Button>
      <Button
        onClick={handleSubmit}
        variant='contained'
        className={classes.primaryButton}
      >
        Publish
      </Button>
      <Dialog className={classes.dialog} open={isPreviewOpen}>
        <Typography variant='h6'>
          Concern:
          <Typography>{state.concern}:{state.concernDesc}</Typography>
        </Typography>
        <Typography variant='h6'>
          Location:
          <Typography>Gate #{getNum(state.location)}</Typography>
        </Typography>
        <img src={state.photo} alt='Image of concern' style={{ width: '200px', height: '200px' }} />
        <Button className={classes.primaryButton} onClick={togglePreview}>
          Back
        </Button>
      </Dialog>
    </div>
  )
}
