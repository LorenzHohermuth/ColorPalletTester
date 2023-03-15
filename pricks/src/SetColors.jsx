import React from 'react'

export default function SetColors({colors}) {
    updateColors()
    
    function updateColors() {
        const idArr = ["bg", "sec", "pr", "text"]  
        for (let i = 0; i < idArr.length; i++) {
            changeColor(idArr[i], i)
        }
    }

    function changeColor(id, colorIndex) {
        const el = document.getElementById(id)
        el.style.backgroundColor = colors[colorIndex]
    }
}
