import React, { useState } from 'react'
import imgCreateAccount from '../Assets/imgCreateAccount.jpg'

const CreateNewAccount = () => {
    const [formValue, setFormValue] = useState({})

    const saveToLocalstorage = () => {
        localStorage.setItem('Faty', JSON.stringify(formValue))
    }
    return (
        <div
        className='container flex flex-row justify-center item-center'
        >
            <div
            className='w-[50%]  rounded-md '>
                <img
                    src={imgCreateAccount}
                    alt="imgCreateAccount"
                />
            </div>
            <div
            className='w-[50%]'
            >
                <form>
                    <h3>Create a New Account</h3>
                    <div className="container">
                        <div>
                            <input
                                className="p-2 rounded-lg mb-2"
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
                                className="p-2 rounded-lg mb-2"
                                type="textbox"
                                placeholder="gender"
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
                            onClick={() => saveToLocalstorage()}
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNewAccount
