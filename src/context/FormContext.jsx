import React, { useContext, useState } from 'react'
import { useRef } from 'react'
const FormContext = React.createContext()
import swal from 'sweetalert2'

const formObject = {
    name : '',
    password : '',
    email : '',
    gender : ''
}


// ! this is the provider that wraps our whole app
// ! the children is our whole app.
// ! verify this fact in the main.jsx where I wrap the entire app with this
const FormProvider = ({children}) => {

    const [formValues,setFormValues] = useState(formObject)
    const formRef = useRef()
    
    const handleChange = (e)=>{
        e.preventDefault()
        
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    console.log(formValues)
    
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(formValues)
        if(!formValues.name || !formValues){
            swal.fire(
                "Name cannot be empty"
            )
// ! this will stop the execution here itself
            return;
        }
        swal.fire(`
            <h1>Form Details</h1>
        ${' Name:'+formValues.name + '\n'}
        ${' Email:'+formValues.email + '\n'}
        ${' Password:'+formValues.password + '\n'}
        ${' Gender:'+formValues.gender + '\n'}


        `)

        // ! this is how I reset the form. I have attached this to the form element that lives inside Form.jsx
        formRef.current.reset()
        
    }
  return (
    <FormContext.Provider value = {{handleChange,onSubmit,formValues,formRef}}>

        {children}
    </FormContext.Provider>
  )
}

export const useFormContext = ()=>{
    return useContext(FormContext)
  }


//   ! from here we export the provider
export default FormProvider