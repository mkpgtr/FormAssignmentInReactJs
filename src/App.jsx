import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header fullWidth={true} />}> 

     <Route path='/form' element={<FormContainer/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route index  element={<About/>}/>

     <Route path='/home' element={<Home/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
