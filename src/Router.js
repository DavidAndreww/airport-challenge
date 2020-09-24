import React from 'react'
import { Switch, Route } from 'react-router'
import AdminModel from './components/adminPanel/AdminModel'
import DisplayField from '../src/components/form/DisplayField'

export default function Router () {
  return (
    <Switch>
      <Route exact path='/' component={DisplayField} />
      <Route path='/admin' component={AdminModel} />
    </Switch>
  )
}
