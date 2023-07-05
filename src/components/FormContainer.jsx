import React from 'react'
import { useFormContext } from '../context/FormContext'
import FormInput from './FormInput'
import Form from './Form'

const FormContainer = () => {
   
// ! these are the input data
    const formInputs = [
        {
            id: 1,
            type: 'text',
            name: "name",
            label: 'Name'
        },
        {
            id: 2,
            type: 'password',
            name: "password",
            label: 'Password'
        },
        {
            id: 3,
            type: 'email',
            name: "email",
            label: 'Email'
        },
        {
            id: 4,
            type: 'radio',
            name: "gender",
            label: 'Gender',
            options: [
                {
                    id: 1,
                    value: 'male'
                },
                {
                    id: 2,
                    value: 'female'
                }

            ]
        },
        {
            id: 5,
            type: 'submit',
            label: 'Submit',
            name: 'submit',

        }
    ]

    const {handleChange} = useFormContext()
  return (
    <Form>
                {

                    formInputs.map((input) => {
                        return <FormInput  handleChange = {handleChange}radioOptions={formInputs.filter((input) => {
                            if (input.type === 'radio') {
                                return input.options
                            }
                        })} key={input.id} topMargin={2} type={input.type} name={input.name} label={input.label} />
                    })
                }
            </Form>
  )
}

export default FormContainer