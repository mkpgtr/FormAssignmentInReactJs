import React from 'react'
import { useFormContext } from '../context/FormContext'

const FormInput = ({type,name,label,topMargin,radioOptions,handleChange}) => {

    


    // !when the type is submit then return this jsx

    if(type==='submit'){
        return  <div style={{marginTop:topMargin+'rem'}}className={`flex flex-col items-center max-w-[40rem] m-auto  border-4  p-5 justify-between`}>
       
       
        <div className='flex items-center p-1 m-auto text-black w-[20rem] justify-between bg-white'>
      <button type={type} className='m-auto'>{label}</button>
        </div>
    
     
      
    </div>

    }
    
    // !when the type is radio then return this jsx
    if(type==='radio'){
        return  <div style={{marginTop:topMargin+'rem'}}className={`flex flex-col items-center max-w-[40rem] m-auto  border-4  p-5 justify-between`}>
       
       
        <div className='flex items-center p-3 m-auto text-black w-[20rem] justify-between bg-white'>
        <label className='text-black'>
            {label}
        </label>
        
           <div htmlFor="" className='flex gap-4'>
                {radioOptions[0].options.map((option)=>{
                    return <div className='flex gap-4'>
                        <span className='capitalize'>{option.value}</span>
                        
                        <input onInput={handleChange} type={type} name={name} className='p-2' value={option.value} />
                        </div>
                })}
           </div>
        </div>
    
     
      
    </div>
    }

   // !when the type is text submit then return this jsx
   

  return (
    <div style={{marginTop:topMargin+'rem'}}className={`flex flex-col items-center max-w-[40rem] m-auto  border-4  p-5 justify-between`}>
       
       
        <div className='flex items-center p-3 m-auto text-black w-[20rem] justify-between bg-white'>
        <label className='text-black'>
            {label}
        </label>
            <input type={type} name={name} className='outline p-2' onChange={handleChange}/>
        </div>
    
     
      
    </div>
  )
}

export default FormInput