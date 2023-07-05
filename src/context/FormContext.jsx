import React, { useContext, useState } from 'react'
const FormContext = React.createContext()
import swal from 'sweetalert2'

const formObject = {
    name : '',
    password : '',
    email : '',
    gender : ''
}

const FormProvider = ({children}) => {

    const [formValues,setFormValues] = useState(formObject)

    const handleChange = (e)=>{
        e.preventDefault()
        
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    console.log(formValues)
    
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(formValues)
        swal.fire("Form submitted successfully")
        console.log('handle submit')
    }
  return (
    <FormContext.Provider value = {{handleChange,onSubmit,formValues}}>

        {children}
    </FormContext.Provider>
  )
}

export const useFormContext = ()=>{
    return useContext(FormContext)
  }

export default FormProvider