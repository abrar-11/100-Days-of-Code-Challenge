import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
const App = () => {
  return (
     <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
     </Router>
  )
}

export default App