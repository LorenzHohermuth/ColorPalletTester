import { useEffect, useState } from "react"
import updateColors from "../functions/updateColors"

export default function ColorPicker({ name, property }) {
  // Just for DX so you don't have to pass with "--" in
  property = "--" + property

  // Trim because it takes it with whitespace from index.css e.g. " #000000"
  const [color, setColor] = useState(getComputedStyle(document.documentElement).getPropertyValue(property).trim())

  useEffect(() => {
    updateColors(property, color)
  }, [color])

  return (
    <div>
      <p>{name}</p>
      <div className="flex flex-col">
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <input type="text" placeholder="Color code" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  )
}
