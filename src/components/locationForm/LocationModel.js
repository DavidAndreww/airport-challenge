import React from 'react'
import LocationView from './LocationView'
import { useDispatch, useSelector } from 'react-redux'
import { updateLocation } from '../../redux/actions'

export default function LocationModel () {
  const dispatch = useDispatch()
  const location = useSelector((state) => state.location)

  const handleChange = (e) => {
    dispatch(updateLocation(e.target.value))
    console.log('GATE # => ', typeof e.target.value)
  }

  return <LocationView value={location} handleChange={handleChange} />
}
