import React from 'react'

import { v4 as uuidv4 } from 'uuid'

function VipSection({ title, list }) {

    return (
        <div className='py-4 pl-1'>

            <h1 className='text-blue-200 text-3xl'>
                {title}
            </h1>

            <ul>
                {
                    list.map(el => {
                        return <li key={uuidv4()} className='text-xl'>{el}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default VipSection