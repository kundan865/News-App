import './App.css'
import Navbar from './componenets/Navbar'
import Category from './componenets/Category'
import Footer from './componenets/Footer'
import News from './pages/News'

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
