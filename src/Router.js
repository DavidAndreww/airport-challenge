import React from 'react'
import { Switch, Route } from 'react-router'
import AdminView from '../src/components/adminPanel/adminView'
import DisplayField from '../src/components/DisplayField'

export default function Router () {
  return (
    <Switch>
      <Route exact path='/' component={DisplayField} />
      <Route path='/admin' component={AdminView} />
    </Switch>
  )
}
