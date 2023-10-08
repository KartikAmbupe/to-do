import React from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div>
        <BrowserRouter>
        <>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={< SignUp/>}></Route>
            
          </Routes>
        </>
      </BrowserRouter>
    </div>
  )
}

export default App