
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { UserContextCard } from './context/UserContext'

import Home from './pages/Home'
import Units from './pages/Units'
import Zones from './pages/zones'
import Developers from './pages/Developers'
import Contactus from './pages/Contactus'
import ZonesDetails from './pages/ZonesDetails'

function App() {
  

  return (
    <>
    
    <Navbar/>
    

    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/units" element={<Units/>}/>
     <Route path="/zones" element={<Zones/>}/>
     <Route path="/zones/:id" element={<ZonesDetails/>}/>
     <Route path="/developers" element={<Developers/>}/>
     <Route path="/contact-us" element={<Contactus/>}/>
    </Routes>

  

     <Footer/>

     
    </>
  )
}

export default App
