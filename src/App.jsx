import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header fullWidth={true} />}> 

     <Route path='/form' element={<FormContainer/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
