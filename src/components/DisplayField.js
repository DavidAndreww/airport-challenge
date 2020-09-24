/* global fetch:false */
import React from 'react'
import ConcernModel from './concernForm/ConcernModel'
import LocationModel from './locationForm/LocationModel'
import PhotoModel from './photoForm/PhotoModel'
import CategoryModel from './categoryForm/CategoryModel'
import PrivacyModel from './privacyForm/PrivacyModel'
import SubmitModel from './formSubmit/SubmitModel'
import ProfileView from './profileDisplay/profileView'
import { useSelector, useDispatch } from 'react-redux'
import { updateConcern, updateConcernDesc, updateLocation, updatePhoto, updateCategory, updatePrivacy } from '../redux/actions'

export default function DisplayField () {
  const dispatch = useDispatch()
  const isFormOpen = useSelector((state) => state.isFormOpen)
  const state = useSelector((state) => state)

  const applyTimeStamp = () => new Date().toString()

  const actions = [updateConcern, updateConcernDesc, updateLocation, updatePhoto, updateCategory, updatePrivacy]

  const handleSubmit = async (e) => {
    e.preventDefault()
    state.timeOfConcern = applyTimeStamp()
    delete state.isFormOpen
    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        concern: state
      })
    })
    const json = await response.json()
    const newEntry = json.new_entry.concern.concern
    window.alert(`Thank you for your submission: "${newEntry}"`)

    actions.forEach(action => {
      dispatch(action(''))
    })
  }

  if (isFormOpen) {
    return (
      <form onSubmit={handleSubmit}>
        <ConcernModel />
        <LocationModel />
        <PhotoModel />
        <CategoryModel />
        <PrivacyModel />
        <SubmitModel />
      </form>
    )
  } else {
    return <ProfileView />
  }
}
