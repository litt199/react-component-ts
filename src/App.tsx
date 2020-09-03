import React ,{useState}from 'react';
import logo from './logo.svg';
import './App.css';
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import LikeButton from './components/LikeButton'

interface IShowResult{
  message:string;
  status:string;
}
interface IThemeProps{
  [key:string]:{color:string;background:string}
}
const themes:IThemeProps = {
  "light":{
    color:"#000",
    background:"#eee"
  },
  "dark":{
    color:"#fff",
    background:"#222"
  }
}
export const ThemeContext = React.createContext(themes.light);
function App() {
  const [show,setShow] = useState(true);
  const [data,loading] = useURLLoader("https://dog.ceo/api/breeds/image/random",[show]);
  const dogResult = data as IShowResult;
  const positions = useMousePosition()
  return (
    
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <p>
            <button onClick={()=>{setShow(!show)}}>change</button>
          </p>
          {show && <MouseTracker/>}
          {loading? <p>狗狗加载中...</p>:<img src={dogResult&&dogResult.message}/>}
          <p>
              X:{positions.x}   
              Y:{positions.y}
          </p>
          <LikeButton/>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
