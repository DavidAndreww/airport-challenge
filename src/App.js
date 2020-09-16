import React from 'react'
import Navigation from './components/Navigation'
import ConcernEntrySectionContainer from './containers/ConcernEntrySectionContainer'
import Footer from './components/Footer'

function App () {
  return (
    <div>
      <Navigation />
      <ConcernEntrySectionContainer />
      <Footer />
    </div>
  )
}

export default App
