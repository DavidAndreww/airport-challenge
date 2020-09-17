import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavigationView from './components/navigation/NavigationView'
import ConcernFormModel from './components/concernForm/ConcernFormModel'
import CategoryFormModel from './components/categoryForm/CategoryFormModel'
import FormSubmitModel from './components/formSubmit/FormSubmitModel'
import Footer from './components/footer/FooterView'

function App () {
  return (
    <div>
      <Provider store={store}>
        <NavigationView />
        <ConcernFormModel />
        <CategoryFormModel />
        <FormSubmitModel />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
