import React from 'react'

function saveToClipboard(text) {
    navigator.clipboard.writeText(text)
}

function saveToClipboard(text, popup) {
    navigator.clipboard.writeText(text)

}

export default saveToClipboard