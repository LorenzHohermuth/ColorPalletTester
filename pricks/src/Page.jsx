import { useEffect } from 'react'
import SetColors from './SetColors'

export default function Page() {
  return (
    <div>
        <div className=' bg-bgColor'>bg</div>
        <div className=' bg-secColor'>sec</div>
        <div className=' bg-prColor'>pr</div>
        <div className=' text-textColor'>text</div>
    </div>

  )
}
