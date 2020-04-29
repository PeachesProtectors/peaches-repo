import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import Footer from './components/filter/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default App
