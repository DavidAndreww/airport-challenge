import React from 'react'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default function CategoryFormModel ({ value, handleChange }) {
  return (
    <div>
      <Typography variant='h4'>Additional Information</Typography>
      <Typography variant='h6'>Category</Typography>
      <FormControl style={{ minWidth: 250 }}>
        <InputLabel htmlFor='category'>Select from Dropdown</InputLabel>
        <Select id='category' value={value} onChange={handleChange}>
          <MenuItem value='bathroom'>Bathroom</MenuItem>
          <MenuItem value='displays'>Displays</MenuItem>
          <MenuItem value='trash_can'>Trash Can</MenuItem>
          <MenuItem value='boarding_gate'>Boarding Gate</MenuItem>
          <MenuItem value='baggage_carousels'>Baggage Carousels</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
