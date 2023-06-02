import React from 'react'

import DB_Server from '../db/DBServer'

function Server() {

    return (
        <div className='flex flex-col items-center gap-5 my-5 lg:w-2/3 w-full'>

            <ul className='flex flex-col items-center p-6 gap-2 w-full lg:w-2/3'>
                {
                    DB_Server.map(li => {
                        return (
                            <li className='flex items-center justify-between w-full'>
                                <span className='text-lg lg:text-2xl text-blue-200'>{li.title}</span>
                                <span className='text-lg lg:text-2xl text-blue-200'>{li.info}</span>
                            </li>
                        )
                    })
                }
            </ul>

            <a href="https://discord.gg/PNpwFJaSGn" target='blank' className='flex justify-center items-center p-4 w-1/2 text-2xl border-2 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white transition-all'>
                DISCORD
            </a>

            <a href="https://www.instagram.com/buenosairesalpiso_24_7" target='blank' className='flex justify-center items-center p-4 w-1/2 text-2xl border-2 text-pink-500 border-pink-500 hover:bg-pink-600 hover:text-white transition-all'>
                INSTAGRAM
            </a>

            <a href="https://www.facebook.com/groups/BuenosAiresalPisoMtaByBorisYGogeta" target='blank' className='flex justify-center items-center p-4 w-1/2 text-2xl border-2 text-blue-500 border-blue-500 hover:bg-blue-600 hover:text-white transition-all'>
                FACEBOOK
            </a>

            <a href="https://www.tiktok.com/@buenosaresalpiso247mta" target='blank' className='flex justify-center items-center p-4 w-1/2 text-2xl border-2 text-teal-300 border-teal-300 hover:bg-teal-300 hover:text-white transition-all'>
                TIK TOK
            </a>

            <a href="https://chat.whatsapp.com/HMiqsCzkmg626WiKb3n6rY" target='blank' className='flex justify-center items-center p-4 w-1/2 text-2xl border-2 text-green-500 border-green-500 hover:bg-green-600 hover:text-white transition-all'>
                WHATSAPP
            </a>

        </div>

    )
}

export default Server