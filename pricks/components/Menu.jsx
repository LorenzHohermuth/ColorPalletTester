import React from 'react'
import saveToClipboard from '../functions/saveToClipboard'
import { useEffect } from 'react'
import hexToRGB from '../functions/hexToRGB'
import { getCssValue } from '../functions/getCssValue'

export default function Menu({state, func}) {

    let css
    let hex
    let rgb
    let tailwind
    useEffect(() => {
        let primary = getCssValue('--primary')
        let secondary = getCssValue('--secondary')
        let bgPrimary = getCssValue('--bgPrimary')
        let bgSecondary = getCssValue('--bgSecondary')
        let textPrimary = getCssValue('--textPrimary')
        let textSecondary = getCssValue('--textSecondary')
        
        css = `:root{
    --primary: ${primary};
    --secondary: ${secondary};
    --bgPrimary: ${bgPrimary};
    --bgSecondary: ${bgSecondary};
    --textPrimary: ${textPrimary};
    --textSecondary: ${textSecondary};
}`

        hex = `${primary}
${secondary}
${bgPrimary}
${bgSecondary}
${textPrimary}
${textSecondary}`


        rgb = `${hexToRGB(primary)}
${hexToRGB(secondary)}
${hexToRGB(bgPrimary)}
${hexToRGB(bgSecondary)}
${hexToRGB(textPrimary)}
${hexToRGB(textSecondary)}`

        tailwind = `theme: {
    extend: {
        colors: {
            primary: "${primary}",
            secondary: "${secondary}",
            bgPrimary: "${bgPrimary}",
            bgSecondary: "${bgSecondary}",
            textPrimary: "${textPrimary}",
            textSecondary: "${textSecondary}",
        },
    },
},`


    }, [getComputedStyle(document.documentElement)])
    
    

    const show = 'absolute bg-black bg-opacity-50 top-0 left-0 h-screen w-screen flex justify-center items-center'

    function close(){
        func(false)
    }

    return (
        <div className={state ? show : 'hidden'}>
            <div className=' bg-neutral-100 rounded-lg'>
                <div className=' border-neutral-300 border-b-2 flex align-baseline'>
                    <button onClick={() => close()}>
                        <img src=".\public\close-circle-outline.svg" alt="hello" className='h-5'/>
                    </button>
                    <div className='ml-2'>Export</div>
                </div>
                <div className='grid grid-cols-3'>
                    <button className=' h-14 w-24 border-2 m-2 rounded-md border-neutral-300' onClick={() => {saveToClipboard(window.location.href)
                        close()}}>URL</button>
                    <button className=' h-14 w-24 border-2 m-2 rounded-md border-neutral-300' onClick={() => {saveToClipboard(css);
                        close()}}>CSS</button>
                    <button className=' h-14 w-24 border-2 m-2 rounded-md border-neutral-300' onClick={() => {saveToClipboard(hex);
                        close()}}>HEX</button>
                    <button className=' h-14 w-24 border-2 m-2 rounded-md border-neutral-300' onClick={() => {saveToClipboard(rgb);
                        close()}}>RGB</button>
                    <button className=' h-14 w-24 border-2 m-2 rounded-md border-neutral-300' onClick={() => {saveToClipboard(tailwind);
                        close()}}>TAILWIND</button>
                </div>
            </div> 
        </div>
    )
}
