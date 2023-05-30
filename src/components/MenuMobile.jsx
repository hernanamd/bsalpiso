import React, { useState } from 'react'

import { Link } from 'wouter'

import audioTouch from './../assets/menu-select.wav'

function MenuMobile() {

  function play() {
    new Audio(audioTouch).play()
  }

  const [menu, setMenu] = useState('hidden')

  function showMenu() {
    menu === 'hidden'
      ? setMenu('')
      : setMenu('hidden')

    play()
  }

  function resetMenu() {
    play()
    setMenu('hidden')
  }

  return (
    <div className='realtive flex flex-col items-center justify-center text-center w-full lg:hidden'>

      <button
        className={
          menu === 'hidden'
            ? 'text-3xl text-blue-200'
            : 'text-3xl text-blue-200 rotate-180'
        }
        onClick={showMenu}>
        {
          menu === 'hidden'
            ? 'MENU'
            : 'V'
        }
      </button>

      <nav className={menu}>
        <ul className='absolute flex flex-col gap-5 bg-black w-full left-0 py-6'>

          <Link href='/' onClick={resetMenu} className=''>
            <li>
              <a className='text-3xl text-blue-200'>INICIO</a>
            </li>
          </Link>

          <Link href='/server' onClick={resetMenu} className=''>
            <li>
              <a className='text-3xl text-blue-200'>SERVER</a>
            </li>
          </Link>

          <Link href='/vip' onClick={resetMenu} className=''>
            <li>
              <a className='text-3xl text-blue-200'>VIP</a>
            </li>
          </Link>

        </ul>
      </nav>

    </div >
  )
}

export default MenuMobile