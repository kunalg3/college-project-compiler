import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='flex justify-center items-center h-screen text-2xl text-5xl font-bold text-white'>
        Enter the World of Coding-
        <Link to="/login" className='mr-8'> Login</Link>
        <Link to="/register"> Registar</Link>
        </div>
    </div>
  )
}

export default Home