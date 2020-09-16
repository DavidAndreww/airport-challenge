import React from 'react'
import NavigationView from './components/navigation/NavigationView'
import ConcernEntrySectionContainer from './containers/ConcernEntrySectionContainer'
import Footer from './components/footer/FooterView'

function App () {
  return (
    <div>
      <NavigationView />
      <ConcernEntrySectionContainer />
      <Footer />
    </div>
  )
}

export default App
