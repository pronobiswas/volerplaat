import React from 'react'
import { IoMdCart } from 'react-icons/io'

export default function Header() {
  return (
    <header>
      <nav className='flex items-center justify-between'>
        {/* ---logo---- */}
        <div className='w-[220px] h-9 bg-gray-400'></div>
        {/* ----menu--- */}
        <ul className='flex gap-6'>
          <li>Home</li>
          <li>About us</li>
          <li>How it Works</li>
          <li>Contact</li>
        </ul>
        <div className='members flex items-center gap-5'>
          <span>Login</span>
          <span>|</span>
          <span>Sign up</span>
          <span><IoMdCart /></span>
        </div>
      </nav>
    </header>
  )
}

