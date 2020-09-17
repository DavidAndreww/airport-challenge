import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavigationView from './components/navigation/NavigationView'
import ConcernModel from './components/concernForm/ConcernModel'
import LocationModel from './components/locationForm/LocationModel'
import CategoryModel from './components/categoryForm/CategoryModel'
import SubmitModel from './components/formSubmit/SubmitModel'
import Footer from './components/footer/FooterView'
import './App.css'

function App () {
  return (
    <div className='form' style={{ maxWidth: '550px', margin: '0 auto' }}>
      <Provider store={store}>
        <NavigationView />
        <ConcernModel />
        <LocationModel />
        <CategoryModel />
        <SubmitModel />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
