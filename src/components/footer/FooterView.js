import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import PersonIcon from '@material-ui/icons/Person'
import LocalAirportIcon from '@material-ui/icons/LocalAirport'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 180,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: 'white'
  },
  primaryButton: {
    color: '#F67438'
  },
  secondaryButton: {
    color: 'black'
  }
}))

export default function Footer () {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.secondaryButton}>
            <Box>
              <LocalAirportIcon />
              <Typography>Explore</Typography>
            </Box>
          </IconButton>
          <IconButton onClick={() => console.log('clicked')} className={classes.primaryButton}>
            <Box>
              <AddCircleIcon />
              <Typography>Create</Typography>
            </Box>
          </IconButton>
          <IconButton className={classes.secondaryButton}>
            <Box>
              <PersonIcon />
              <Typography>Profile</Typography>
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
