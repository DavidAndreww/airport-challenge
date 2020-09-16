import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavigationView from './components/navigation/NavigationView'
import Footer from './components/footer/FooterView'
import CategoryFormModel from './components/categoryForm/CategoryFormModel'

function App () {
  return (
    <div>
      <Provider store={store}>
        <NavigationView />
        <CategoryFormModel />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
