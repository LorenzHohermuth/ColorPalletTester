import React from 'react'
import saveToClipboard from '../functions/saveToClipboard'
import { useEffect } from 'react'
import hexToRGB from '../functions/hexToRGB'
import { getCssValue } from '../functions/getCssValue'

export default function ExportMenu({state, func}) {

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
            <div className=' bg-neutral-100 rounded-lg font-medium'>
                <div className=' border-neutral-200 border-b-2 flex align-baseline p-3'>
                    <button onClick={() => close()}>
                        <img src=".\public\close-circle-outline.svg" alt="hello" className='h-5'/>
                    </button>
                    <div className='ml-2'>Export</div>
                </div>
                <div className='grid grid-cols-3 p-3'>
                    <button className='flex items-center flex-col px-4 py-6 m-2 rounded-md bg-neutral-200' onClick={() => {saveToClipboard(window.location.href);close()}}>
                            <img className='h-10 p-1' src="link-outline.svg" alt="linkIcon" />
                            URL
                    </button>
                    <button className='flex items-center flex-col px-4 py-6 m-2 rounded-md bg-neutral-200' onClick={() => {saveToClipboard(css);close()}}>
                            <img className='h-10 p-1' src="logo-css3.svg" alt="cssIcon" />
                            CSS
                    </button>
                    <button className='flex items-center flex-col px-4 py-6 m-2 rounded-md bg-neutral-200' onClick={() => {saveToClipboard(hex);close()}}>
                            <img className='h-10 p-1' src="color-palette-outline.svg" alt="colorIcon" />
                            HEX
                    </button>
                    <button className='flex items-center flex-col px-4 py-6 m-2 rounded-md bg-neutral-200' onClick={() => {saveToClipboard(rgb);close()}}>
                            <img className='h-10 p-1' src="color-filter-outline.svg" alt="colorIcon" />
                            RGB
                    </button>
                    <button className='flex items-center flex-col px-4 py-6 m-2 rounded-md bg-neutral-200' onClick={() => {saveToClipboard(tailwind);close()}}>
                            <img className='h-10 p-1' src="rocket-outline.svg" alt="rocketIcon" />
                            TAILWIND
                    </button>
                </div>
            </div> 
        </div>
    )
}
