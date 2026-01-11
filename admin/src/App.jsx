import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import AdminDashboard from './pages/AdminDashboard'
import { Route, Router, Routes } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
      <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        </Routes>
    </>
  )
}

export default App
