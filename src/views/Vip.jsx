import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import DB_Vip from '../db/DBVip'

import VipBox from '../components/VipBox'

function Vip() {

    return (
        <div className='flex flex-col py-10 gap-12 lg:w-2/3 select-none'>

            {
                DB_Vip.map(el => {
                    return <VipBox title={el.title} key={uuidv4()} benefits={el.benefits} bg={el.bg} />
                })
            }

        </div>
    )
}

export default Vip