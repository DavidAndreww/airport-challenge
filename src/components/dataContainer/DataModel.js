import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { getNum } from '../../utilityFunctions'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  dialogWrapper: {
    width: '300px',
    padding: '5px'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    height: '250px',
    maxWidth: '100%',
    margin: '0 auto'
  },
  spanText: {
    fontSize: '14px'
  },
  button: {
    width: '100px',
    margin: '5px auto',
    background: '#F67438',
    color: 'white',
    borderRadius: '25px'
  }
})

// props:
// open - determines if dialog is open/closed, takes truthy falsy value
// state (required) -> used to render data
// admin -> if true, adds time of concern field, else renders back button
// handleCallBack -> required if admin is false: function to toggle true/false value to open/close dialog
export default function DataModel (props) {
  const classes = useStyles()
  if (!props.admin) {
    return (
      <Dialog open={props.open}>
        <div className={classes.dialogWrapper}>
          <div className={classes.wrapper}>
            <img
              src={props.state.photo}
              alt='Image of concern'
              className={classes.img}
            />
          </div>
          <div>
            <Typography variant='h6'>
              Concern:{' '}
              <span className={classes.spanText}>
                <strong>{props.state.concern}:</strong>{' '}
                {props.state.concernDesc}
              </span>
            </Typography>
            <Typography variant='h6'>
              Location:{' '}
              <span className={classes.spanText}>
                Gate #{getNum(props.state.location)}
              </span>
            </Typography>
            <Typography variant='h6'>
              Category:{' '}
              <span className={classes.spanText}>{props.state.category}</span>
            </Typography>
            <Typography variant='h6'>
              Privacy:{' '}
              <span className={classes.spanText}>{props.state.privacy}</span>
            </Typography>
            <div className={classes.wrapper}>
              <Button className={classes.button} onClick={props.handleCallBack}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    )
  } else if (props.admin) {
    return (
      <div className={classes.dialogWrapper}>
        <div className={classes.wrapper}>
          <img
            src={props.state.photo}
            alt='Image of concern'
            className={classes.img}
          />
        </div>
        <div>
          <Typography variant='h6'>
            Concern:{' '}
            <span className={classes.spanText}>
              <strong>{props.state.concern}:</strong> {props.state.concernDesc}
            </span>
          </Typography>
          <Typography variant='h6'>
            Location:{' '}
            <span className={classes.spanText}>
              Gate #{getNum(props.state.location)}
            </span>
          </Typography>
          <Typography variant='h6'>
            Category:{' '}
            <span className={classes.spanText}>{props.state.category}</span>
          </Typography>
          <Typography variant='h6'>
            Privacy:{' '}
            <span className={classes.spanText}>{props.state.privacy}</span>
          </Typography>
          <Typography variant='h6'>
            TimeStamp:{' '}
            <span className={classes.spanText}>
              {props.state.timeOfConcern}
            </span>
          </Typography>
        </div>
      </div>
    )
  }
}
