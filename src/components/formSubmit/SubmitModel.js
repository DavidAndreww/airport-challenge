/* global fetch:false */
import React from 'react'
import Submitview from './SubmitView'
import { useSelector } from 'react-redux'

export default function FormSubmitModel () {
  const state = useSelector((state) => state)

  const applyTimeStamp = () => new Date()
  const handleSubmit = () => {
    state.timeOfConcern = applyTimeStamp().toString()
    console.log('STATE -> ', state)
    fetch()
  }

  const togglePreview = () => {
    console.log('togglePreview')
  }

  return <Submitview togglePreview={togglePreview} handleSubmit={handleSubmit} />
}
