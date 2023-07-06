import React from 'react'
import { useFormContext } from '../context/FormContext'

const About = () => {
    const {formValues} = useFormContext()
  return (
<div className='m-auto w-[60%] text-center mt-5 text-2xl '>
  I built this as part of an assignment for React Js. <span className='text-sm'>(Click on About to return anytime here)</span>

  <p className="italic mt-5">
  Here is : <a className='text-red-600' href='/form'>The Assignment(Form)  </a>
 </p>

<div className='mt-8 '>
    Now some extra info(unimportant) :
</div>
 <p className='italic mt-6'>


 The github code for this lives here : <a className='text-blue-600' href='https://github.com/mkpgtr/FormAssignmentInReactJs/tree/master/src'>
    Code
  </a>

  </p>
  <p className='italic'>
 The github code for the components live here : <a className='text-blue-600' href='https://github.com/mkpgtr/FormAssignmentInReactJs/tree/master/src/components'>
    Code
  </a>

  </p>
  <p className='italic mt-8 underline font-semibold text-lg'>
 Did not pay much attention to css here as this was a react assignment but if asked I will surely improve the look of this webapp
 

  </p>

  <p className='italic mt-8 font-semibold'>
I focused mainly on creating reusable code with proper file/folder structures.
used Context API to create a global state
 

  </p>
  <p className='italic mt-8 font-semibold text-2xl text-orange-600'>
used tailwindcss to quickly style basic stuff
 

  </p>

  <p className='italic mt-8 text-lg'>
The navbar component's use effect is inspired by my previous project (try resizing to see the magic) :
Detailed use of contextAPI in my previous project 
<a className='text-red-500' href="https://responsive-dashboard-by-manish.netlify.app/">That lives here</a>

 

  </p>
  

  
</div>
  )
}

export default About