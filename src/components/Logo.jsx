import React, { useState } from 'react'

import imgLogo from './../assets/Logo.png'
import imgLogo2 from './../assets/Logo2.png'
import { Link } from 'wouter'

function Logo() {

  const [logo, setLogo] = useState(imgLogo)

  const touchLogo = () => {
    setLogo(imgLogo2)
  }

  const offLogo = () => {
    setLogo(imgLogo)
  }

  return (

    <div className='flex items-center justify-center bg-black-600 p-4 w-full' onTouchStart={touchLogo} onTouchEnd={offLogo} >
      <Link href='/'>
        <img src={logo} alt="Logo de Buenos Aires al Piso" className='h-40' />
      </Link>
    </div>

  )
}

export default Logo