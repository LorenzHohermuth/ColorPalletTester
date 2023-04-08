import { useParams } from "react-router-dom";
import ColorPicker from "./ColorPicker";
import { useEffect, useState } from "react"
import Menu from "./ExportMenu";
import generate from "../functions/generate";
import { getPropertiesCss } from "../functions/getProperties";

export default function Sidebar() {
  const params = useParams() 

  const [colors, setColors] = useState(params.colors.split("-"))
  const [menuOpenState, setMenuOpenState] = useState(false)

  function handleGenerate() {
    const generateRes = generate(getPropertiesCss())
    setColors(generateRes.split("-"))
  }

  return (
    <aside className="h-screen w-max border-r border-neutral-300 sticky top-0 bg-stone-100 p-5 flex flex-col justify-between gap-5">
      <div className="flex flex-col gap-5">
        <p className="text-3xl font-bold text-neutral-600">Colors</p>
        <ColorPicker name="Primary Color" property="primary" colors={colors} index="0" />
        <ColorPicker name="Secondary Color" property="secondary" colors={colors} index="1" />
        <ColorPicker name="Background Primary" property="bgPrimary" colors={colors} index="2" />
        <ColorPicker name="Background Secondary" property="bgSecondary" colors={colors} index="3" />
        <ColorPicker name="Text Primary" property="textPrimary" colors={colors} index="4" />
        <ColorPicker name="Text Secondary" property="textSecondary" colors={colors} index="5" />
      </div>
      <div>
        <div>
          <button onClick={() => handleGenerate()}>Generate</button>
        </div>
        <div>
          <a href="/">Reset</a>
        </div>
        <div>
          <button onClick={() => setMenuOpenState(true)}>Export</button>
          <Menu state={menuOpenState} func={setMenuOpenState}/>
        </div>
      </div>
    </aside>
  )
}
