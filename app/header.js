import React from 'react'
import { IoMdCart } from 'react-icons/io'

export default function Header() {
  return (
    <header>
      <nav className='flex items-center justify-between py-7 px-5'>
        {/* ---logo---- */}
        <div className='w-full max-w-[220px]'>
          <img src={"/headerLogo.png"} className='w-ful aspect-[220/35] object-cover'/>
        </div>
        {/* ----menu--- */}
        <div className='hidden lg:block'>
          <ul className='flex gap-6'>
            <li>Home</li>
            <li>About us</li>
            <li>How it Works</li>
            <li>Contact</li>
          </ul>
        </div>
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

