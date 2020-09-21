/* global FileReader:false */
import React from 'react'
import PhotoView from './PhotoView'
import { useDispatch } from 'react-redux'
import { updatePhoto } from '../../redux/actions'

export default function PhotoModel () {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      dispatch(updatePhoto(e.target.result))
    }
    reader.readAsDataURL(file)
  }
  return <PhotoView handleChange={handleChange} />
}
