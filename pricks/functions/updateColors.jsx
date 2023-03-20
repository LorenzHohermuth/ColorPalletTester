import React from 'react'

export default function updateColors(property, color, colors, index) {

    document.documentElement.style.setProperty(property, color);
}