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
import NewFormInput from './components/NewFormInput'
import OutsideAlerter from './components/useOutsideAlerter'
import NewFormInput2 from './components/NewFormInput2'
import FormItem from './components/outsideAlerter2'
import NewForm3 from './components/NewForm3'

function App() {
  const [count, setCount] = useState(0)
  const [isInputActive,setInputActive] = useState(false)

  const handleFocus=()=>{
    console.log('focused')
  }
 return <div className='m-auto w-[50%] '>
  
 {/* <div className='flex flex-col'>
 <label htmlFor="">First name</label>
  <input style={{width:"40rem"}} onFocus={handleFocus}   type="text" />
 </div> */}
 {/* <OutsideAlerter> 

  <NewFormInput />
 </OutsideAlerter> */}

 {/* <NewFormInput2 label={"Last Name"} required={true} error={"Last Name is required"}/>
 <NewFormInput2 label={"Email"} required={true} error={"Email is required"}/>
 <NewFormInput2 label={"Phone Number"} required={true} error={"Phone number is required"}/> */}
 
 {/* <FormItem>

 <NewFormInput2 label={"First Name"} required={true} error={"First Name is required"}/>
 </FormItem> */}

 <NewForm3 />
 </div>
}

export default App
