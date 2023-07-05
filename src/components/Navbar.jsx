import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
const Navbar = ({options,collapseAtBreakpoint}) => {

  const navRef = useRef();
  const [collapsed,setCollapsed] = useState(true)

  const handleMenuToggle = ()=>{
    setCollapsed(!collapsed)
  }

  useEffect(()=>{
    
     if(window.innerWidth>768){
      setCollapsed(true)
     }

  },[window.innerWidth])
  return (
    <>
    {collapsed ? <AiOutlineMenu className='menu-btn cursor-pointer block '  onClick={handleMenuToggle} style={{marginLeft:'auto',color:'white'}}/> :
     <GrClose className='close-btn absolute cursor-pointer right-3 block'  style={{marginLeft:'auto'}} onClick={()=>setCollapsed(true)}/>
    }
   
    <div ref={navRef} className={`flex justify-around gap-3 p-3 transition-all  text-white font-semibold ${collapseAtBreakpoint=='md' ? `md:flex-col`:`sm:flex-col ${collapsed? 'sm:d-block sm:p-0 sm:h-0 sm:overflow-hidden' : ``} `} cursor-pointer`}>
        {options.map((option)=>{
          return <h1 key={option.id}>{option.label}</h1>
        })}
    </div>
        </>
  )
}

export default Navbar