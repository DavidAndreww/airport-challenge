import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DataModel from '../dataContainer/DataModel'

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
  togglePreview,
  state
}) {
  const classes = useStyles()

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
      <DataModel
        state={state}
        handleCallBack={togglePreview}
        open={isPreviewOpen}
      />
    </div>
  )
}
