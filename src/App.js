import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import NavigationModel from './components/navigation/NavigationModel'
import FooterModel from './components/footer/FooterModel'
import Router from './Router'
function App () {
  return (
    <div className='form' style={{ maxWidth: '550px', margin: '0 auto' }}>
      <Provider store={store}>
        <BrowserRouter>
          <NavigationModel />
          <Router />
          <FooterModel />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
