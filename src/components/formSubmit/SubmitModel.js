/* global fetch:false */
import React, { useState } from 'react'
import Submitview from './SubmitView'
import { useSelector } from 'react-redux'

export default function FormSubmitModel () {
  const state = useSelector((state) => state)
  const [isPreviewOpen, setPreview] = useState(false)

  function formValidator () {
    if (state.concern?.concernDesc?.location?.category?.privacy) {
      return true
    }
  }

  const applyTimeStamp = () => new Date().toString()

  const handleSubmit = async () => {
    if (formValidator()) {
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
    } else {
      window.alert('Please ensure all fields are completed')
    }
  }

  const togglePreview = () => {
    isPreviewOpen ? setPreview(false) : setPreview(true)
  }

  return (
    <Submitview
      isPreviewOpen={isPreviewOpen}
      togglePreview={togglePreview}
      handleSubmit={handleSubmit}
    />
  )
}
