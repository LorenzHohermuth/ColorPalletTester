import { useState , useRef, useEffect} from 'react';
import Page from './Page';

function App() {

  const bgColorIN = useRef();

  useEffect(() => {
    setBgColor(bgColorIN.current.value)
    setColors([bgColor, secColor, prColor, textColor])
  },[bgColorIN.current.value])

  const [bgColor, setBgColor] = useState('#F6F1F1');
  const [prColor, setPrColor] = useState('#19A7CE');
  const [secColor, setSecColor] = useState('#146C94');
  const [textColor, setTextColor] = useState('#000000');

  const [colors, setColors] = useState([bgColor, secColor, prColor, textColor]);

  return (
    <div>
      <nav>
        <input ref={bgColorIN} type="color" />
        <input type="text" placeholder={bgColor}/>
      </nav>
      <Page colors={colors}/>
    </div>
  )
}

export default App
