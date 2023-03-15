import { useEffect } from 'react'
import SetColors from './SetColors'

export default function Page({colors}) {

    useEffect(() => {
        SetColors(colors={colors})
    }, colors)

    

  return (
    <div>
        <div id='bg'>bg</div>
        <div id='sec'>sec</div>
        <div id='pr'>pr</div>
        <div id='text'>text</div>
        <button onClick={() => updateColors()}>OOO</button>
    </div>
  )
}
