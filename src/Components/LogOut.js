import React from 'react'

const LogOut = () => {
  const userLogOut = ()=>{
    localStorage.clear()
    setTimeout(()=>{
      window.location.reload(false)
    },800)
  }
  return (
    <button
    className='bg-blue-500'
    onClick= {()=>userLogOut()}
    >
        Log Out
    </button>
  )
}

export default LogOut