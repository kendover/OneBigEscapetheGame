import Scene1 from './scenes/Scene1';
import Distraction from './scenes/Distraction';
import TurnstileGate from './scenes/TurnstileGate';

import GoToTheBathroom from './scenes/GoToTheBathroom';
import LetItRip from './scenes/LetItRip';
import JumpOut from './scenes/JumpOut';

import BadEnding from './scenes/BadEnding';
import './App.css';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Scene1/>}/>
          <Route path="/Distraction" element={<Distraction/>}/>
          <Route path="/GoToTheBathroom" element={<GoToTheBathroom/>}/>
         <Route path="/TurnstileGate" element={<TurnstileGate/>}/>
         
          <Route path="/LetItRip" element={<LetItRip/>}/>
          <Route path="/JumpOut" element={<JumpOut/>}/>
           <Route path="/BadEnding" element={<BadEnding/>}/>
          
        </Routes>
      </div>
  );
}

export default App;
