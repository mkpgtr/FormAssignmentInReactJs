import React from 'react'
import { useFormContext } from '../context/FormContext'

const Form = ({children}) => {
    const {onSubmit} = useFormContext()
  return (
    <form onSubmit={onSubmit}>{children}</form>
  )
}

export default Form