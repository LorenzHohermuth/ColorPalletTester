import { useState , useRef, useEffect} from 'react';
import Page from './Page';
import SetColors from './SetColors';

function App() {

  const [bgColor, setBgColor] = useState('#F6F1F1');
  const [prColor, setPrColor] = useState('#19A7CE');
  const [secColor, setSecColor] = useState('#146C94');
  const [textColor, setTextColor] = useState('#000000');
  
  useEffect(() => {
    SetColors([bgColor, secColor, prColor, textColor])
  }, [bgColor, secColor, prColor, textColor])

  function setValue(e, func) {
    const x = e.target.value
    x.charAt(0) == '#' && x.length == 7 || x.length == 4?
      func(x)
    : 
    x.charAt(0) != '#' && x.length == 6 || x.length == 3?
    func('#' + e.target.value)
    :
    console.log('no hex falue');
  }

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  
  return (
    <div>
      <nav className='flex'>
        <div>
          Background Color
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}/>
          <input type="text" placeholder={bgColor} onChange={(e) => {setValue(e, setBgColor)}}/>
        </div>
        <div>
          Primary Color
          <input type="color" value={prColor} onChange={(e) => setPrColor(e.target.value)}/>
          <input type="text" placeholder={prColor} onChange={(e) => {setValue(e, setPrColor)}}/>
        </div>
        <div>
          Secondary Color
          <input type="color" value={secColor} onChange={(e) => setSecColor(e.target.value)}/>
          <input type="text" placeholder={secColor} onChange={(e) => {setValue(e, setSecColor)}}/>
        </div>
        <div>
          Text Color
          <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)}/>
          <input type="text" placeholder={textColor} onChange={(e) => {setValue(e, setTextColor)}}/>
        </div>
      </nav>
      <Page/>
    </div>
  )
}

export default App
