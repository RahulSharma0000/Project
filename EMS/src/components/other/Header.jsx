import React from 'react'

const Header = () => {

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload();
   } 
  return (
    <div className=' flex items-end justify-between  text-2xl bg-[#0000] p-5 '>
     <h3 >Hello 👋 <br /> UserName</h3>
     <button onClick={logOutUser} className='bg-red-400 text-black p-3 rounded-full '> Log Out</button>
    </div>
  )
}

export default Header
