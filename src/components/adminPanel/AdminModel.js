/* global fetch:false */
import React, { useEffect, useState } from 'react'
import AdminView from './AdminView'

export default function AdminModel () {
  const [jsonArray, setJsonArray] = useState(null)

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/admin', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json()
    console.log(json)
    setJsonArray(json)
  }

  useEffect(() => {
    console.log('page loaded')
  })
  return <AdminView />
}
