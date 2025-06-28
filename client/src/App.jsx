import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext.jsx'

const App = () => {

  const {showLogin} =useContext(AppContext)

  return (
    <div className= 'px-4 sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-gray-400 to-gray-100'>

      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/result' element ={<Result/>}/>
        <Route path='/buy' element ={<BuyCredits/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
