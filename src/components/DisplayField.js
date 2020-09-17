import React from 'react'
import ConcernModel from './concernForm/ConcernModel'
import LocationModel from './locationForm/LocationModel'
import PhotoModel from './photoForm/PhotoModel'
import CategoryModel from './categoryForm/CategoryModel'
import PrivacyModel from './privacyForm/PrivacyModel'
import SubmitModel from './formSubmit/SubmitModel'
import ProfileView from './profileDisplay/profileView'
import { useSelector } from 'react-redux'

export default function DisplayField () {
  const isFormOpen = useSelector((state) => state.isFormOpen)

  if (isFormOpen) {
    return (
      <div>
        <ConcernModel />
        <LocationModel />
        <PhotoModel />
        <CategoryModel />
        <PrivacyModel />
        <SubmitModel />
      </div>
    )
  } else {
    return <ProfileView />
  }
}
