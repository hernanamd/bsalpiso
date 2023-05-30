import React from 'react'

import DB_Server from '../db/DBServer'

function Server() {

    return (
        <div className='flex flex-col items-center gap-5 my-5'>

            <ul className='flex flex-col items-center p-6 gap-2 w-full'>
                {
                    DB_Server.map(li => {
                        return (
                            <li className='flex items-center justify-between w-full'>
                                <span className='text-lg text-blue-200'>{li.title}</span>
                                <span className='text-lg text-blue-200'>{li.info}</span>
                            </li>
                        )
                    })
                }
            </ul>

            <a href="" className='flex justify-center items-center bg-pink-600 p-4 w-1/2 text-xl'>
                INSTAGRAM
            </a>

            <a href="" className='flex justify-center items-center bg-blue-600 p-4 w-1/2 text-xl'>
                FACEBOOK
            </a>

            <a href="" className='flex justify-center items-center bg-cyan-400 p-4 w-1/2 text-xl'>
                TIK TOK
            </a>

            <a href="" className='flex justify-center items-center bg-green-600 p-4 w-1/2 text-xl'>
                WHATSAPP
            </a>

        </div>

    )
}

export default Server