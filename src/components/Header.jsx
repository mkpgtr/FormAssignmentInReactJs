import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import FormInput from './FormInput'
import { useFormContext } from '../context/FormContext'
import FormContainer from './FormContainer'
import {Outlet} from 'react-router-dom'

const Header = ({ fullWidth }) => {
    const navOptions = [
        {
            id: 1,
            label: 'Home',
            path: '/home'

        },
        {
            id: 2,
            label: 'About',
            path: '/about'

        },
        {
            id: 3,
            label: 'Contact',
            path: '/contact'
        }
    ]

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
        <>
            <div className={`${fullWidth && `min-w-[100vw] bg-red-400 p-4 text-center`}`}>
                <Navbar options={navOptions} collapseAtBreakpoint={'sm'} />


            </div>

            {/* <Form>
                {

                    formInputs.map((input) => {
                        return <FormInput handleChange = {handleChange}radioOptions={formInputs.filter((input) => {
                            if (input.type === 'radio') {
                                return input.options
                            }
                        })} key={input.id} topMargin={2} type={input.type} name={input.name} label={input.label} />
                    })
                }
            </Form> */}

            <Outlet />
        </>
    )
}

export default Header