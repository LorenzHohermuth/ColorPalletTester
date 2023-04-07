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
    <div className="border-b border-neutral-300  pb-4">
      <p className="font-bold text-neutral-600 mb-1">{name}</p>
      <div className="flex items-center gap-2">
        {/* onBlur is for listenting to event where color picker closes */}
        <input type="color" className="bg-transparent" value={color} onChange={(e) => setColor(e.target.value)} onBlur={() => updateRoute(color, colors, index)} />
        <input type="text" className="py-1 px-2 rounded-sm outline-none" placeholder="Color code" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  )
}