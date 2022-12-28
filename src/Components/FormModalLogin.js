import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loggedInUser } from '../States/userInfoSlice'

const FormModalLogin = ({close}) => {
    const [formValue, setFormValue] = useState({})
    console.log(formValue);


    const dispatch = useDispatch()

    const loginUser = (e) => {
        e.preventDefault()
        const formData = {
            email: formValue.email,
            password: formValue.password
        }

        dispatch(loggedInUser(formData))
        setTimeout(() => {
            close(false)
            window.location.reload(false)
        }, 1500)
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
                    className="font-serif  text-yellow-500 text-xl  italic flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 w-[200px]  rounded-full bg-white "
                    type='submit'
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default FormModalLogin
