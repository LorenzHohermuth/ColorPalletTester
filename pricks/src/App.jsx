import { useState , useRef, useEffect} from 'react';
import Page from './Page';
import SetColors from './SetColors';

function App() {

  function setValue(e) {
    e.target.value.charAt(0) == '#' ? 
    setBgColor(e.target.value)
    : 
    setBgColor('#' + e.target.value)

  }

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  
  const [bgColor, setBgColor] = useState('#F6F1F1');
  const [prColor, setPrColor] = useState('#19A7CE');
  const [secColor, setSecColor] = useState('#146C94');
  const [textColor, setTextColor] = useState('#000000');

  useEffect(() => {
    SetColors([bgColor, secColor, prColor, textColor])
  }, [bgColor, secColor, prColor, textColor])

  function setBg(e) {
    x = e.target.value
    x.charAt(0) == '#' && x.length == 7 ? 
      setBgColor(x)
    : 
    x.charAt(0) != '#' && x.length == 6 ?
    setBgColor('#' + e.target.value)
    :
    console('no hex falue');
  }

  function setPr(e) {
    x = e.target.value
    x.charAt(0) == '#' && x.length == 7 ? 
      setPrColor(x)
    : 
    x.charAt(0) != '#' && x.length == 6 ?
    setPrColor('#' + e.target.value)
    :
    console('no hex falue');
  }

  function setSec(e) {
    x = e.target.value
    x.charAt(0) == '#' && x.length == 7 ? 
      setSecColor(x)
    : 
    x.charAt(0) != '#' && x.length == 6 ?
    setSecColor('#' + e.target.value)
    :
    console('no hex falue');
  }

  function setText(e) {
    x = e.target.value
    x.charAt(0) == '#' && x.length == 7 ? 
      setTextColor(x)
    : 
    x.charAt(0) != '#' && x.length == 6 ?
    setTextColor('#' + e.target.value)
    :
    console('no hex falue');
  }

  return (
    <div>
      <nav>
        <div>
          Background Color
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}/>
          <input type="text" placeholder={bgColor} onChange={(e) => {setBg(e)}}/>
        </div>
        <div>
          Primary Color
          <input type="color" value={prColor} onChange={(e) => setPrColor(e.target.value)}/>
          <input type="text" placeholder={prColor} onChange={(e) => {setPr(e)}}/>
        </div>
        <div>
          Secondary Color
          <input type="color" value={secColor} onChange={(e) => setSecColor(e.target.value)}/>
          <input type="text" placeholder={secColor} onChange={(e) => {setSec(e)}}/>
        </div>
        <div>
          Text Color
          <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)}/>
          <input type="text" placeholder={textColor} onChange={(e) => {setText(e)}}/>
        </div>
      </nav>
      <Page/>
    </div>
  )
}

export default App
