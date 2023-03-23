import React from 'react'

export function getCssValue(val) {
    return getComputedStyle(document.documentElement).getPropertyValue(val)
}
