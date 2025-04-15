import React, { useState } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import { Link } from 'react-router-dom';

const Home = () => {
  let [search,setSearch]=useState("");
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Main  search={search}  />
        </>
  )
}

export default Home
