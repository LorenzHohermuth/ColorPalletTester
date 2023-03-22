import React from 'react'

export default function Menu({state, func}) {

    const show = 'absolute bg-black bg-opacity-50 top-0 left-0 h-screen w-screen flex justify-center items-center'

    return (
        <div className={state ? show : 'hidden'}>
            <div className='bg-bgPrimary rounded-lg'>
                <div className='flex'>
                    <button onClick={() => func(false)}>X</button>
                    <div>Export</div>
                </div>
                <div className='grid grid-cols-3'>
                    <button>URL</button>
                    <button>CSS</button>
                    <button>HEX</button>
                    <button>RGB</button>
                    <button>TAILWIND</button>
                </div>
            </div> 
        </div>
    )
}
