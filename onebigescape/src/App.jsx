import Scene1 from './scenes/Scene1';
import Distraction from './scenes/Distraction';
import TurnstileGate from './scenes/TurnstileGate';
import GoToTheBathroom from './scenes/GoToTheBathroom';
import RizLib from './scenes/RizLib';
import RunPast from './scenes/RunPast';
import Stairs from './scenes/Stairs';

import LetItRip from './scenes/LetItRip';
import JumpOut from './scenes/JumpOut';
import Gonz from './scenes/Gonz';
import CTC from './scenes/CTC';

import BadEnding from './scenes/BadEnding';
import './App.css';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
        <Routes>

          {/* Correct route */}
          <Route path="/" element={<Scene1/>}/>
          <Route path="/Distraction" element={<Distraction/>}/>
          <Route path="/GoToTheBathroom" element={<GoToTheBathroom/>}/>
         <Route path="/TurnstileGate" element={<TurnstileGate/>}/>
          <Route path="/RizLib" element={<RizLib/>}/>
          <Route path="/RunPast" element={<RunPast/>}/>
          <Route path="/Stairs" element={<Stairs/>}/>

         {/* Incorrect Options */}
          <Route path="/LetItRip" element={<LetItRip/>}/>
          <Route path="/JumpOut" element={<JumpOut/>}/>
          
          <Route path="/Gonz" element={<Gonz/>}/>
          <Route path="/CTC" element={<CTC/>}/>

          {/* Endings */}
           <Route path="/BadEnding" element={<BadEnding/>}/>
          
        </Routes>
      </div>
  );
}

export default App;
