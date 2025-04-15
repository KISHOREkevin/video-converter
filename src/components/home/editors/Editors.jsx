import React, { useEffect, useState } from 'react'
import Editor from './Editor'
import tools from '../../../utils/tools.js'
const Editors = ({search}) => {
  
  let [searchTools,setSearchTools]=useState(tools);
  useEffect(()=>{
    let localTools=searchTools.filter((t)=> t.name.toLowerCase().includes(search.toLowerCase()));
    if(localTools.length === 0 || search.length===0){
      setSearchTools(tools);
    }else{
      setSearchTools(localTools);
    }
    
  },[search])
  
  return (

    <div className=' lg:mt-20 mt-30 justify-center p-2 flex flex-wrap  overflow-scroll'>
      { searchTools.map((tool)=>{
        return <Editor key={tool.id} toolname={tool.name} tooldesc={tool.desc} toollink={tool.link} />
 
      })}
              </div>
  )
}

export default Editors
