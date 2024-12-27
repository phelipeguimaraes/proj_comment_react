import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <NavBar />
    <div className="container">
      <Outlet/>
    </div>
    <Footer />
    </>
  )
}

export default App
