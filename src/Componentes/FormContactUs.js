import React, { useState } from 'react'
import ContactImg from '../Assets/ContactImg.png'

const FormContactUs = () => {
    const [formValue, setFormValue] = useState({})
    

    const saveToLocalstorage = (e) => {
        e.preventDefault()
        localStorage.setItem('Contact', JSON.stringify(formValue))
    }
    return (
        <div className='grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100'>
          
                <div className='space-y-2'>
                    <h2 className='text-4xl font-bold leading-tight lg:text-5xl '>
                        Contattaci
                    </h2>
                    <div>
                        Per qualsiasi informazione compilail form e io ti risponderò volentieri
                    </div>
                    <img src={ContactImg} alt="imgContacts" className="p-6 h-52 md:h-64" />
                </div>
                <div className='w-[400px]'>
                    <form
                        className='space-y-6 ng-untouched ng-pristine ng-valid '
                        onSubmit={saveToLocalstorage}>
                        <div className='w-full'>
                            <label htmlFor="firstName">
                                Enter your first name
                            </label>
                            <input
                                type="text"
                                id='firstName'
                                className='w-full p-3 rounded bg-zinc-100'
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        firstName: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Enter your second name
                            </label>
                            <input
                                type="text"
                                id='secondName'
                                className='w-full p-3 rounded bg-zinc-100'
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        secondName: e.target.value

                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="email">
                                Enter your -email
                            </label>
                            <input
                                type="email"
                                id='email'
                                className='w-full p-3 rounded bg-zinc-100'
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        email: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div>
                            <textarea
                                name="comment"
                                placeholder="Enter your comment"
                                className='w-full p-3 rounded bg-zinc-100'
                                rows="3"
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        comment: e.target.value
                                    })
                                }
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-200 w-full p-3 font-bold uppercase rounded bg-pink-100'
                        >
                            save
                        </button>
                    </form>
                </div>
            

        </div>
    )
}

export default FormContactUs
