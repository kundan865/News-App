import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componenet/Navbar'
import News from './assets/pages/News'
import Category from './componenet/Category'
import Footer from './componenet/Footer'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar className={'sticky top-0 z-20'} />
      <Category className={'sticky py-10 top-8 z-10'} />
      <div className="flex-grow">
        <News className="pb-10" />
      </div>
      <Footer />
    </div>
  )
}

export default App
