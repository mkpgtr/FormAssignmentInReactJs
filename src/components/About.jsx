import React from 'react'
import { useFormContext } from '../context/FormContext'

const About = () => {
    const {formValues} = useFormContext()
  return (
<div className='m-auto w-[50%] text-center mt-5 text-3xl '>
  I built this as part of an assignment for React Js.

 <p className='italic'>
 The github code for this lives here : <a className='text-blue-600' href='https://github.com/mkpgtr/FormAssignmentInReactJs/tree/master/src'>
    Code
  </a>

  <p className="italic mt-5">
  Here is : <a className='text-red-600' href='/form'>The Form  </a>
  </p>
 </p>
</div>
  )
}

export default About