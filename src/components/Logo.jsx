import React, { useState } from 'react'

import imgLogo from './../assets/Logo.png'
import imgLogo2 from './../assets/Logo2.png'
import { Link } from 'wouter'

function Logo() {

  const [logo, setLogo] = useState(imgLogo)

  function standbyLogo() {
    setLogo(imgLogo)
  }

  function hoverLogo() {
    setLogo(imgLogo2)
  }

  return (

    <div className='flex items-center justify-center bg-black-600 p-4 w-full'>
      <Link href='/'>
        <img src={logo} alt="Logo de Buenos Aires al Piso" className='h-40 cursor-pointer' onMouseEnter={hoverLogo} onMouseLeave={standbyLogo} />
      </Link>
    </div>

  )
}

export default Logo