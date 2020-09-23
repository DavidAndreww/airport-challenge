import React, { useState } from 'react'
import NavigationView from './NavigationView'

export default function NavigationModel () {
  const [adminView, setAdminView] = useState(true)

  const toggleAdminView = () => {
    if (adminView === false) {
      setAdminView(true)
    } else {
      setAdminView(false)
    }
  }

  return <NavigationView adminView={adminView} toggleAdminView={toggleAdminView} />
}
