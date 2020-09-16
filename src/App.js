import React from 'react'
import NavigationView from './components/navigation/NavigationView'
import Footer from './components/footer/FooterView'

function App () {
  return (
    <div>
      <NavigationView />
      <div>
        All of the form fields will be rendered here.
      </div>
      <Footer />
    </div>
  )
}

export default App
