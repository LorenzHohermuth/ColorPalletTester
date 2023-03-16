import React from 'react'

export default function SetColors(colors) {
    console.log(colors)

    updateColors()

    function updateColors() {
        document.documentElement.style.setProperty('--bgColor', colors[0]);
        document.documentElement.style.setProperty('--secColor', colors[1]);
        document.documentElement.style.setProperty('--prColor', colors[2]);
        document.documentElement.style.setProperty('--textColor', colors[3]);
    }
}
