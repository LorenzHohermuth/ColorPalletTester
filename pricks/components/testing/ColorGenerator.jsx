import React, { useEffect } from 'react'
import generate from '../../functions/generate'

//go to http://localhost:5173/86c33c-69892a-d5e7f6-78b3e2-090113-1a0335/generator

export default function ColorGenerator() {

  const properties = [
    "--primary",
    "--secondary",
    "--bgPrimary",
    "--bgSecondary",
    "--textPrimary",
    "--textSecondary",
  ];

  useEffect(() => {
    const keyDownHandler = event => {
      if(event.key === ' '){
        event.preventDefault()
        generate(properties)
      }
    }
    document.addEventListener('keydown', keyDownHandler)
    return () => {document.removeEventListener('keydown', keyDownHandler)}
  }, [])

  return (
    <div className='h-screen'>
      <div className='grid grid-cols-6 h-full'>
        <div className='bg-primary'></div>
        <div className='bg-secondary'></div>
        <div className='bg-bgPrimary'></div>
        <div className='bg-bgSecondary'></div>
        <div className='bg-textPrimary'></div>
        <div className='bg-textSecondary'></div>
      </div>
    </div>   
  )
}
