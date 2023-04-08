import React from 'react'
import updateColors from "../functions/updateColors"
import { updateFullRoute } from "../functions/updateRoute"

export default function generate(propertyList) {
    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
          const k = (n + h / 30) % 12;
          const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
          return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateColors(){
        const hPrimary = randomNumber(0, 360)
        const sPrimary = randomNumber(50, 100)
        const lPrimary = 50
        const primary = hslToHex(hPrimary, sPrimary, lPrimary)

        const hSecondary = hPrimary - randomNumber(5, 10)
        const lSecondary = lPrimary - randomNumber(10, 30)
        const secondary = hslToHex(hSecondary, sPrimary, lSecondary)

        const hBgPrimary = (hPrimary + 120) % 360
        const sBgPrimary = randomNumber(30, 70)
        const lBgPrimary = randomNumber(90, 98)
        const bgPrimary = hslToHex(hBgPrimary, sBgPrimary, lBgPrimary)

        const lBgSecondary = lBgPrimary - randomNumber(10, 30)
        const bgSecondary = hslToHex(hBgPrimary, sBgPrimary, lBgSecondary )

        const hTextPrimary = (hBgPrimary + 60) % 360
        const sTextPrimary = randomNumber(70, 100)
        const lTextPrimary = randomNumber(10  , 0)
        const textPrimary = hslToHex(hTextPrimary, sTextPrimary, lTextPrimary)

        const lTextSecondary = lTextPrimary + randomNumber(6, 10)
        const textSecondary = hslToHex(hTextPrimary, sTextPrimary, lTextSecondary )

        const colors = [primary,
                        secondary,
                        bgPrimary,
                        bgSecondary,
                        textPrimary,
                        textSecondary]
        
        colors.forEach((e, i) => {
            updateColors(propertyList[i], e)
        })

        return updateFullRoute(colors)
    }

    return generateColors()
}
