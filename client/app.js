import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import Footer from './components/filter/footer'
import {ToastProvider} from 'react-toast-notifications'

const App = () => {
  return (
    <div>
      <ToastProvider>
        <Navbar />
        <Routes />
        <Footer />
      </ToastProvider>
    </div>
  )
}

export default App
