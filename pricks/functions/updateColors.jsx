import React from 'react'

export default function updateColors(property, color) {
    localStorage.setItem(property, color)
    document.documentElement.style.setProperty(property, color);
}