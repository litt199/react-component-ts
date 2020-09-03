import React ,{useState}from 'react';
import logo from './logo.svg';
import './App.css';
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'

function App() {
  const [show,setShow] = useState(true);
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=>{setShow(!show)}}>change</button>
        </p>
        {show && <MouseTracker/>}
        <p>
            X:{positions.x}   
            Y:{positions.y}
        </p>
      </header>
    </div>
  );
}

export default App;
