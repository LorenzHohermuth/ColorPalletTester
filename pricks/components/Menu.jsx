import React from 'react'
import saveToClipboard from '../functions/saveToClipboard'
import { useEffect } from 'react'
import hexToRGB from '../functions/hexToRGB'

export default function Menu({state, func}) {

    let css
    let hex
    let rgb
    let tailwind
    useEffect(() => {

    const primary = document.documentElement.style.getPropertyValue('--primary')
    const secondary = document.documentElement.style.getPropertyValue('--secondary')
    const primary = document.documentElement.style.getPropertyValue('--primary')
    const primary = document.documentElement.style.getPropertyValue('--primary')
    const primary = document.documentElement.style.getPropertyValue('--primary')
    const primary = document.documentElement.style.getPropertyValue('--primary')
    
        css = `:root{
    --primary: #${primary};
    --secondary: #${colors[1]};
    --bgPrimary: #${colors[2]};
    --bgSecondary: #${colors[3]};
    --textPrimary: #${colors[4]};
    --textSecondary: #${colors[5]};
}`

    hex = `#${primary}
#${colors[1]}
#${colors[2]}
#${colors[3]}
#${colors[4]}
#${colors[5]}`


    rgb = `${hexToRGB(primary)}
${hexToRGB(colors[1])}
${hexToRGB(colors[2])}
${hexToRGB(colors[3])}
${hexToRGB(colors[4])}
${hexToRGB(colors[5])}`

    tailwind = `theme: {
    extend: {
        colors: {
            primary: "#${primary}",
            secondary: "#${colors[1]}",
            bgPrimary: "#${colors[2]}",
            bgSecondary: "#${colors[3]}",
            textPrimary: "#${colors[4]}",
            textSecondary: "#${colors[5]}",
        },
    },
},`


    }, [document.documentElement.style])
    
    

    const show = 'absolute bg-black bg-opacity-50 top-0 left-0 h-screen w-screen flex justify-center items-center'

    function close(){
        func(false)
    }

    return (
        <div className={state ? show : 'hidden'}>
            <div className='bg-bgPrimary rounded-lg'>
                <div className='flex'>
                    <button onClick={() => close()}>X</button>
                    <div>Export</div>
                </div>
                <div className='grid grid-cols-3'>
                    <button onClick={() => {saveToClipboard(window.location.href)
                        close()}}>URL</button>
                    <button onClick={() => {saveToClipboard(css);
                        close()}}>CSS</button>
                    <button onClick={() => {saveToClipboard(hex);
                        close()}}>HEX</button>
                    <button onClick={() => {saveToClipboard(rgb);
                        close()}}>RGB</button>
                    <button onClick={() => {saveToClipboard(tailwind);
                        close()}}>TAILWIND</button>
                </div>
            </div> 
        </div>
    )
}
