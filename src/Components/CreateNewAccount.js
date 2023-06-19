import React, { useState } from 'react'
import imgCreateAccount from '../Assets/imgCreateAccount.jpg'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addNewUserToDB } from '../States/createNewAccountSlice'
import { useNavigate } from 'react-router-dom'

const CreateNewAccount = () => {
    const [formValue, setFormValue] = useState({})
    console.log(formValue);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userData = {
        // creato un'ogetto per il passaggio dei dati del form
        data: {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            gender: formValue.gender,
            email: formValue.email,
            dateOfBird: formValue.dateOfBird,
            userName: formValue.userName,
            password: formValue.password,

        },
    }

    const handleAddUser = (e) => {
        e.preventdefault()
        dispatch(addNewUserToDB(userData))
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 1500)
    }

    // const saveToLocalstorage = () => {
    //     localStorage.setItem('Faty', JSON.stringify(formValue))
    // }


    return (
        <div className="grid justify-center items-center max-w-screen-xl h-full grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 ">
            <div className="w-[100%] space-y-2">
                <img
                    src={imgCreateAccount}
                    alt="imgCreateAccount"
                    className="h-[400px] w-screen rounded"
                />
            </div>
            <div className="w-[100%] grid justify-center items-center ">
                <h3>Create a New Account</h3>
                <form onSubmit={handleAddUser} className="space-y-6 w-[full]  ">
                    <div className="flex flex-col justify-center items-center ">
                        <div className=" justify-center items-center">
                            <input
                                className=" p-2 rounded-lg mb-2"
                                type="text"
                                placeholder="First name"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        firstName: e.target.value,
                                    })
                                }
                            ></input>
                        </div>
                        <div>
                            <input
                                className="p-2 rounded-lg mb-2"
                                type="text"
                                placeholder="Last name"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        lastName: e.target.value,
                                    })
                                }
                            ></input>
                        </div>

                        <div>
                            <input
                                className="p-2 rounded-lg mb-2 "
                                type="text"
                                placeholder="gender"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        gender: e.target.value,
                                    })
                                }
                            ></input>
                        </div>
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
                                type="date"
                                datepicker="true"
                                min="1979-12-31"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        dateOfBird: e.target.value,
                                    })
                                }
                            ></input>
                        </div>

                        <div>
                            <input
                                className="p-2 rounded-lg mb-2"
                                type="text"
                                placeholder="User Name"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        userName: e.target.value,
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
                            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 duration-300  p-2 rounded-lg mb-2 bg-purple-100 "
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateNewAccount
