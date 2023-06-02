import React from 'react'

import { Link } from 'wouter'

import audioTouch from './../assets/menu-select.wav'

function Menu() {

  function play() {
    new Audio(audioTouch).play()
  }

  return (
    <nav className='w-1/3 hidden lg:flex justify-center '>
      <ul className='flex flex-col items-center gap-8 pt-28'>

        <Link href='/' onClick={play}>
          <li>
            <a className='text-5xl text-blue-200 hover:text-blue-300 cursor-pointer select-none'>INICIO</a>
          </li>
        </Link>

        <Link href='/server' onClick={play}>
          <li>
            <a className='text-5xl text-blue-200 hover:text-blue-300 cursor-pointer select-none'>SERVER</a>
          </li>
        </Link>

        <Link href='/vip' onClick={play}>
          <li>
            <a className='text-5xl text-blue-200 hover:text-blue-300 cursor-pointer select-none'>VIP</a>
          </li>
        </Link>

      </ul>
    </nav>
  )
}

export default Menu