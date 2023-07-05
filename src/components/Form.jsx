import React from 'react'
import { useFormContext } from '../context/FormContext'


const Form = ({children}) => {
    // ! I am bringing this from the global context that lives inside context/FormContext.jsx
    const {onSubmit,formRef} = useFormContext()
    
  return (
    // ! here I have attached the ref that resets the form
    
    <form  ref={formRef} onSubmit={onSubmit}>{children}</form>
  )
}

export default Form