import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function ConcernView ({ concern, concernDesc, handleChange }) {
  return (
    <div className='section' style={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
      <TextField onChange={handleChange} value={concern} id='concern' label='Topic of concern...' />
      <TextField onChange={handleChange} value={concernDesc} id='concern-desc' label='Type description to help identify the problem.' />
    </div>
  )
}
