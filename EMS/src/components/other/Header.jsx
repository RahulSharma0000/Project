import React from 'react'

const Header = () => {
  return (
    <div className=' flex items-end justify-between  text-2xl bg-[#0000] p-5 '>
     <h3 >Hello 👋 <br /> UserName </h3>
     <button className='bg-red-400 text-black p-3 rounded-full '> Log Out</button>
    </div>
  )
}

export default Header
