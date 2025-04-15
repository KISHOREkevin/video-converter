import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setSearch}) => {
  let handleChange=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <div id='navbar' className='fixed top-0 bg-green-100 text-green-900 lg:flex w-full  items-center space-x-3 p-3 shadow-lg '>
      <div className=''>
        <h1 className='font-bold lg:text-3xl lg:text-start text-center'>Video Converter</h1>
    </div>
    <div className='grow text-center p-3'>
      <input onChange={handleChange} className='lg:text-start w-full text-center lg:w-xl bg-gray-300 lg:text-xl text-2xl rounded-md px-1' placeholder="Search here..." type="text"/>
      
    </div>
      <div className='  bg-green-600 text-white text-center lg:p-2 rounded-md'>
        <Link className=' ' to={"/about"}>About</Link>
      </div>
    </div>
  )
}

export default Navbar
