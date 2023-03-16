import ColorPicker from "./ColorPicker";

export default function Sidebar() {
  return (
    <aside className="h-screen bg-bgSecondary p-4 flex flex-col gap-5">
      <ColorPicker name="Primary Color" property="primary" />
      <ColorPicker name="Secondary Color" property="secondary" />
      <ColorPicker name="Background Primary" property="bgPrimary" />
      <ColorPicker name="Background Secondary" property="bgSecondary" />
      <ColorPicker name="Text Primary" property="textPrimary" />
      <ColorPicker name="Text Secondary" property="textSecondary" />
    </aside>
  )
}
