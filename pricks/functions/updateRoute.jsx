import React from 'react'

export default function updateRoute(color, colors, index) {
    colors[index] = color.replace("#", "")
    const route = colors.join("-")

    window.history.replaceState(null, null, "/" + route )
}