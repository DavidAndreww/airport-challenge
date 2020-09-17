import React from 'react'
import Submitview from './SubmitView'
import { useSelector } from 'react-redux'

export default function FormSubmitModel () {
  const state = useSelector((state) => state)

  const handleSubmit = () => {
    console.log('Fetch is not working!?')
    console.log('STATE -> ', state)
  }

  const togglePreview = () => {
    console.log('togglePreview')
  }

  return <Submitview togglePreview={togglePreview} handleSubmit={handleSubmit} />
}
