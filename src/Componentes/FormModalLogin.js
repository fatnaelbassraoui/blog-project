import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import {loggedInUser} from '../States/userInfoSlice'

const FormModalLogin = () => {
    const [formValue, setFormValue] = useState({})
    console.log(formValue);

    
    const dispatch = useDispatch()

    const loginUser = () => {
        // e.preventDefault()
        const data = {
            email:formValue.email,
            password: formValue.password
        }
        // localStorage.setItem('Faty', JSON.stringify(formValue))
        dispatch(loggedInUser(data))
    }
    return (
        <form
        onSubmit={
            loginUser
        }
        >  
            <div className="container">
                <div>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="email"
                        placeholder="e-mail"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                email: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <div>
                    <input
                        className="p-2 rounded-lg mb-2"
                        type="password"
                        placeholder="password"
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                password: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <button
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 p-2 rounded-lg mb-2 bg-purple-100 "
                    type='submit'
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default FormModalLogin
