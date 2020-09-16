import React, { useState } from 'react'
import ConcernEntrySection from '../components/ConcernEntrySection'

export default function ConcernEntrySectionContainer () {
  const [concern, setConcern] = useState()
  const [concernDesc, setConcernDesc] = useState()
  const [location, setLocation] = useState()
  const [form, setform] = useState({
    concern: ''
  })
  return <ConcernEntrySection />
}
