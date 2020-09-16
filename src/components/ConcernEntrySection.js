import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import RoomIcon from '@material-ui/icons/Room'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  primaryConcern: {
    margin: theme.spacing(1),
    width: '50%'
  },
  icon: {
    color: '#F67438'
  },
  inputLabel: {
    minWidth: 0
  },
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
}))

export default function ConcernEntrySection ({ form }) {
  const classes = useStyles()

  return (
    <div>
      <TextField
        className={classes.primaryConcern}
        id='primary-concern-field'
        defaultValue='Please enter the topic of your concern'
      />
      <TextField
        className={classes.primaryConcern}
        id='concern-desc-field'
        defaultValue='Type description to help identify the problem'
      />
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex'>
          <RoomIcon className={classes.icon} />
          <Typography>{form.location}</Typography>
        </Box>
        <FormControl>
          <InputLabel className={classes.inputLabel}>
            Change Location
          </InputLabel>
          <Select>
            <MenuItem value='Gate 1'>Gate 1</MenuItem>
            <MenuItem value='Gate 2'>Gate 2</MenuItem>
            <MenuItem value='Gate 3'>Gate 3</MenuItem>
            <MenuItem value='Gate 4'>Gate 4</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <InputBase type='file' />
      <Typography variant='h4'>Additional Information</Typography>
      <Box>
        <FormControl>
          <InputLabel>
            <Typography variant='h6'>CATEGORY</Typography>
          </InputLabel>
          <Select>
            <MenuItem>Bathroom</MenuItem>
            <MenuItem>Displays</MenuItem>
            <MenuItem>Trash Can</MenuItem>
            <MenuItem>Boarding Gate</MenuItem>
            <MenuItem>Baggage Carousels</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormControl>
        <FormLabel>Select privacy of your report</FormLabel>
        <RadioGroup>
          <FormControlLabel
            value='anonymous'
            control={<Radio />}
            label='Anonymous'
          />
          <FormControlLabel
            value='private'
            control={<Radio />}
            label='Private'
          />
        </RadioGroup>
      </FormControl>
      <Button variant='outlined' className={classes.secondaryButton}>Preview</Button>
      <Button variant='contained' className={classes.primaryButton}>Publish</Button>
    </div>
  )
}
