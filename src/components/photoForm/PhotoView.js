import React from 'react'

export default function PhotoView ({ handleChange }) {
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <input type='file' accept='image/' name='photo' onChange={handleChange} />
    </div>
  )
}
