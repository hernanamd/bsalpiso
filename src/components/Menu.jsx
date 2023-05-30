import React from 'react'

import { Link } from 'wouter'

function Menu() {
  return (
    <nav className='w-1/4 hidden lg:flex justify-center'>
      <ul className='flex flex-col items-center gap-8 pt-28'>

        <Link href='/' className=''>
          <li>
            <a className='text-5xl text-blue-200 hover:text-blue-300 cursor-pointer'>INICIO</a>
          </li>
        </Link>

        <Link href='/server' className=''>
          <li>
            <a className='text-5xl text-blue-200 hover:text-blue-300 cursor-pointer'>SERVER</a>
          </li>
        </Link>

        <Link href='/vip' className=''>
          <li>
            <a className='text-5xl text-blue-200 hover:text-blue-300 cursor-pointer'>VIP</a>
          </li>
        </Link>

      </ul>
    </nav>
  )
}

export default Menu