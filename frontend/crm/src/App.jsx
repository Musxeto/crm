import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  )
}
