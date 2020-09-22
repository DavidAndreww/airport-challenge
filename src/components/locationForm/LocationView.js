import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import RoomIcon from '@material-ui/icons/Room'
import { getNum } from '../../utilityFunctions'

export default function LocationView ({ value, handleChange }) {
  return (
    <div style={{ width: '100%' }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex'>
          <RoomIcon style={{ color: '#F67438' }} />
          <Typography style={{ color: 'grey' }}>
            GATE {getNum(value)}
          </Typography>
        </Box>
        <FormControl style={{ width: '155px' }}>
          <InputLabel htmlFor='location'>Change Location</InputLabel>
          <Select id='location' value={value} onChange={handleChange}>
            <MenuItem value='gate_1'>Gate 1</MenuItem>
            <MenuItem value='gate_2'>Gate 2</MenuItem>
            <MenuItem value='gate_3'>Gate 3</MenuItem>
            <MenuItem value='gate_4'>Gate 4</MenuItem>
            <MenuItem value='gate_5'>Gate 5</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}
