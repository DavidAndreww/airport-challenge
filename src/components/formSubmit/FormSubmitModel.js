import React from 'react'
import FormSubmitview from './FormSubmitView'
import { useSelector } from 'react-redux'

export default function FormSubmitModel () {
  const state = useSelector((state) => state)

  const handleSubmit = async () => {
    console.log('STATE -> ', state)
  }

  const togglePreview = () => {
    console.log('preview button')
  }

  return <FormSubmitview togglePreview={togglePreview} handleSubmit={handleSubmit} />
}
