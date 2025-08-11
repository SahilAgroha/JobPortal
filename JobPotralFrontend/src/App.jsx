import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AllPosts from './components/AllPosts'
import Edit from './components/Edit'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<AllPosts/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
  </>
  )
}

export default App
