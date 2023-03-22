import { useParams } from "react-router-dom";
import redirectLoader from "../src/redirectLoader";
import ColorPicker from "./ColorPicker";
import { useState } from "react"
import Menu from "./Menu";
import Popup from "./Popup";
import { popout } from "./Popup";

export default function Sidebar() {
  let { colors } = useParams()
  colors = colors.split("-")
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <aside className="h-full min-h-screen bg-bgSecondary p-5 flex flex-col justify-between gap-5">
      <div className="flex flex-col gap-5">
        <ColorPicker name="Primary Color" property="primary" colors={colors} index="0" />
        <ColorPicker name="Secondary Color" property="secondary" colors={colors} index="1" />
        <ColorPicker name="Background Primary" property="bgPrimary" colors={colors} index="2" />
        <ColorPicker name="Background Secondary" property="bgSecondary" colors={colors} index="3" />
        <ColorPicker name="Text Primary" property="textPrimary" colors={colors} index="4" />
        <ColorPicker name="Text Secondary" property="textSecondary" colors={colors} index="5" />
      </div>
      <div>
        <a href="/">Reset</a>
        <div>
          <button onClick={() => setMenuOpenState(true)}>Export</button>
          <Menu state={menuOpenState} func={setMenuOpenState} />
          < Popup />
          <button></button>        </div>
      </div>
    </aside>
  )
}
