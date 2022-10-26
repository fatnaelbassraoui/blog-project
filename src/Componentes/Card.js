import React, { useState } from 'react'


const Card = ({ post, toggle, setSingle }) => {
    const [formData, setFormData] = useState(null)

    const deleteCard = async () => {
        try {
            await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then(console.log)
        } catch (error) {
            console.log(error)
        }
    }

    const updateCard = async (e) => {
        e.preventDefault()
        try {
            await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then(console.log)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className=" text-center w-[300px] border-separate border-spacing-2 border border-slate-400 rounded-[6%] ">
                <div className="flex item-center justify-center">
                    <img
                        src="https://picsum.photos/200"
                        alt="img"
                        className="w-[295px] h-[200px] rounded-t-[8%] "
                    />
                </div>
                <p className="bg-slate-50 border border-slate-300 text-l font-semibold">
                    {post.title.slice(0, 8)}
                </p>
                <h5 className=" bg-slate-100 text-center text-xl  text-pink-500 font-bold 0 border border-slate-300 ">
                    Body
                </h5>
                <p className="bg-slate-50 border border-slate-300 text-l h-[50px] font-semibold">
                    {`${post.body.slice(
                    0,
                    40
                )}...`}</p>
                <div className="button">
                    <span>
                        <button
                            onClick={() => [toggle(true), setSingle(post)]}
                            className="bg-red-200 w-[100%]  text-xl text-pink-500 font-bold"
                        >
                            Read All
                        </button>
                    </span>
                    <hr />
                    <span>
                        <button
                            onClick={() => deleteCard()}
                            className="bg-red-200 w-[100%]  text-xl text-pink-500 font-bold"
                        >
                            DELETE POST
                        </button>
                    </span>
                </div>

                <form onSubmit={updateCard} className="flex flex-col">
                    <input
                    className='mx-4 p-2 bg-zinc-100'
                        type="text"
                        placeholder="Edit title"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title: e.target.value,
                            })
                        }
                    />
                    <input
                        className='mx-4 p-2 bg-zinc-100'
                        type="text"
                        placeholder="Edit body"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                body: e.target.value,
                            })
                        }
                    />

                    <button
                        type="submit"
                        className="  text-xl text-pink-500 font-bold"
                    >
                        POST
                    </button>
                </form>
            </div>
        </>
    )
}

export default Card
