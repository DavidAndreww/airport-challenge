import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavigationView from './components/navigation/NavigationView'
import DisplayField from './components/DisplayField'
import FooterModel from './components/footer/FooterModel'

function App () {
  return (
    <div className='form' style={{ maxWidth: '550px', margin: '0 auto' }}>
      <Provider store={store}>
        <NavigationView />
        <DisplayField />
        <FooterModel />
      </Provider>
    </div>
  )
}

export default App
