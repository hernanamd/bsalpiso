import React from 'react'

import Banner from '../components/Banner'

import banner1 from './../assets/Banner1.jpeg'
import banner2 from './../assets/Banner2.jpeg'
import banner3 from './../assets/Banner3.jpeg'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center py-10 gap-10 lg:w-3/4 m-auto'>

      <Banner banner1={banner1} title='LA MEJOR COMUNIDAD' />
      <Banner banner1={banner2} title='AUTOS EXCLUSIVOS' />
      <Banner banner1={banner3} title='MAPEOS REALES' />

    </div>
  )
}

export default Home