import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

export default function PrivacyView ({ value, handleChange }) {
  return (
    <div>
      <FormControl>
        <FormLabel>Select privacy of your report</FormLabel>
        <RadioGroup value={value} onChange={handleChange}>
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
    </div>
  )
}
