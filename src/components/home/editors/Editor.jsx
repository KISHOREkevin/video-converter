import React from 'react'
import { Link } from 'react-router-dom'

const Editor = ({toolname,tooldesc,toollink}) => {
  return (
    <>
    
    <Link className='lg:w-1/2 w-80 ' to={toollink}>
      <div className='lg:p-10 p-10 bg-green-100 text-green-900  rounded-xl shadow-md lg:h-40 h-52 m-2 overflow-hidden text-center hover:bg-green-200'>
        <h2 className='text-xl font-bold m-3 '>{toolname}</h2> 
        <p className='m-2' >{tooldesc}</p>
      </div>
    </Link>
    
    </>
  )
}

export default Editor
