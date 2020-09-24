/* global fetch:false */
import React from 'react'
import ConcernModel from '../concernField/ConcernModel'
import LocationModel from '../locationField/LocationModel'
import PhotoModel from '../addPhotoField/PhotoModel'
import CategoryModel from '../categoryField/CategoryModel'
import PrivacyModel from '../privacyField/PrivacyModel'
import SubmitModel from '../submitButtons/SubmitModel'
import ProfileView from '../profileDisplay/profileView'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateConcern,
  updateConcernDesc,
  updateLocation,
  updatePhoto,
  updateCategory,
  updatePrivacy
} from '../../redux/actions'

export default function DisplayField () {
  const dispatch = useDispatch()
  const isFormOpen = useSelector((state) => state.isFormOpen)
  const state = useSelector((state) => state)

  const applyTimeStamp = () => new Date().toString()

  const validateFields = () => {
    for (const val in state) {
      if (state[val] === '') {
        return false
      }
    }
    return true
  }

  const actions = [
    updateConcern,
    updateConcernDesc,
    updateLocation,
    updatePhoto,
    updateCategory,
    updatePrivacy
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateFields()) {
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

      actions.forEach((action) => {
        dispatch(action(''))
      })
    } else {
      window.alert('Please fill out all fields before submitting concern')
      return false
    }
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
