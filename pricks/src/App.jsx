import { useState , useRef, useEffect} from 'react';
import Page from './Page';
import SetColors from './SetColors';

function App() {

  const bgColorIN = useRef();

  // useEffect(() => {
  //   // setBgColor(bgColorIN.current.value)
  //   // setColors([bgColor, secColor, prColor, textColor])
  //   console.log(bgColorIN.current.value);
  // },[bgColorIN.current.value])

  
  const [bgColor, setBgColor] = useState('#F6F1F1');
  const [prColor, setPrColor] = useState('#19A7CE');
  const [secColor, setSecColor] = useState('#146C94');
  const [textColor, setTextColor] = useState('#000000');


  SetColors([bgColor, secColor, prColor, textColor])

  return (
    <div>
      <nav>
        <input type="color" />
        <input ref={bgColorIN} type="text" placeholder={bgColor}/>

      </nav>
      <Page/>
    </div>
  )
}

export default App
