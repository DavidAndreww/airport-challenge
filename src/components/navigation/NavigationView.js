import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 80,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    background: '#F67438'
  },
  iconButton: {
    color: 'white'
  }
}))

export default function Navigation ({ adminView, toggleAdminView }) {
  const classes = useStyles()
  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.iconButton}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography>Report</Typography>
          <Link onClick={toggleAdminView} to={adminView ? '/admin' : '/'}>
            <IconButton className={classes.iconButton}>
              <MoreIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
