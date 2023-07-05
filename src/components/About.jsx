import React from 'react'
import { useFormContext } from '../context/FormContext'

const About = () => {
    const {formValues} = useFormContext()
  return (
<>
    <div>{formValues.name}</div>
    <div>{formValues.email}</div>
    <div>{formValues.gender}</div>
    <div>{formValues.password}</div>
</>
  )
}

export default About