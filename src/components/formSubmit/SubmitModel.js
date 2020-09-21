/* global fetch:false */
import React from 'react'
import Submitview from './SubmitView'
import { useSelector } from 'react-redux'

export default function FormSubmitModel () {
  const state = useSelector((state) => state)

  const applyTimeStamp = () => new Date().toString()

  const handleSubmit = async () => {
    state.timeOfConcern = applyTimeStamp()
    delete state.isFormOpen
    console.log('STATE -> ', state)
    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        concern: state
      })
    })
  }

  const togglePreview = () => {
    console.log('togglePreview')
  }

  return <Submitview togglePreview={togglePreview} handleSubmit={handleSubmit} />
}
