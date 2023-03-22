import React from 'react'
import { useRef } from 'react'

export default function Popup({text}) {

    const popup = useRef()

  return (
    <div ref={popup} className='fixed translate-x-full transition-all duration-500 ease-out absolute top-4 right-0'>
        <div className=' border-4 rounded-lg px-8 py-4 bg-bgPrimary border-bgSecondary'>{text}</div>
    </div>
    )
}

export function popout(){
    popup.classList.toggle('translate-x-full')
}
