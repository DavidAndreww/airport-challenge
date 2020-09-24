import React, { useState } from 'react'
import Submitview from './SubmitView'
import { useSelector } from 'react-redux'

export default function FormSubmitModel () {
  const state = useSelector((state) => state)
  const [isPreviewOpen, setPreview] = useState(false)

  const togglePreview = () => {
    isPreviewOpen ? setPreview(false) : setPreview(true)
  }

  return (
    <Submitview
      state={state}
      isPreviewOpen={isPreviewOpen}
      togglePreview={togglePreview}
    />
  )
}
