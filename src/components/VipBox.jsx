import React, { useState } from 'react'

import VipSection from './VipSection'

function VipBox({ title, benefits, bg }) {
    const [section, setSection] = useState(false)

    function changeSectionState() {
        section === false
            ? setSection(true)
            : setSection(false)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className=
                {
                    section === false
                        ? `flex items-center justify-center ${bg} w-1/3 transition-all duration-150`
                        : `flex items-center justify-center ${bg} w-full transition-all duration-150`

                }
            >
                <h1
                    onClick={changeSectionState}
                    className={`py-6 text-center text-6xl bg-transparent`}>
                    {title}
                </h1>
            </div>

            <div className="">
                {
                    section === false
                        ? <></>
                        : benefits.map(el => { return <VipSection title={el.title} list={el.list} /> })

                }
            </div>
        </div>
    )
}

export default VipBox