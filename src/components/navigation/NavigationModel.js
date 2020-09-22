import React, { useState } from 'react'
import NavigationView from './NavigationView'

export default function NavigationModel () {
  const [adminView, setAdminView] = useState(false)

  const toggleAdminView = () => {
    !adminView && setAdminView(true)
  }

  return <NavigationView toggleAdminView={toggleAdminView} />
}
