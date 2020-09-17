import React from 'react'
import FormSubmitview from './FormSubmitView'
import { useSelector } from 'react-redux'

export default function FormSubmitModel () {
  const state = useSelector((state) => state)

  const handleSubmit = () => {
    console.log('Fetch is not working!?')
  }

  const togglePreview = () => {
    console.log('togglePreview')
  }

  return <FormSubmitview togglePreview={togglePreview} handleSubmit={handleSubmit} />
}
