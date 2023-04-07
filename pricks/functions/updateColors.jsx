import React from 'react'

export default function updateColors(property, color) {

    document.documentElement.style.setProperty(property, color);
}