import React from 'react'

function Banner({ banner1, title }) {
    return (
        <div className="flex flex-col text-center gap-2 w-full lg:w-2/3">

            <div className="">
                <img src={banner1} alt="" />
            </div>

            <div className="">
                <h1 className='text-2xl text-yellow-500'>{title}</h1>
            </div>

        </div>
    )
}

export default Banner