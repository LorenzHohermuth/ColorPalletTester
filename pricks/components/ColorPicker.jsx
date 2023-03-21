import { useEffect, useState } from "react"
import updateColors from "../functions/updateColors"
import updateRoute from "../functions/updateRoute"

export default function ColorPicker({ name, property, colors, index }) {
  // Just for DX so you don't have to pass with "--" in
  property = "--" + property

  const [color, setColor] = useState("#" + colors[index])

  useEffect(() => {
    updateColors(property, color, colors, index)
  }, [color])

  return (
    <div>
      <p>{name}</p>
      <div className="flex flex-col">
        {/* onBlur is for listenting to event where color picker closes */}
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} onBlur={() => updateRoute(color, colors, index)} />
        <input type="text" placeholder="Color code" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  )
}
