import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./components/Navbar.js";
import {Home }from "./components/Home.js";
import {MidiKeyboard} from "./components/MidiKeyboard.js";
import {DrumKit} from "./components/DrumKit.js";
import {MusicPlayer} from "./components/MusicPlayer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/midiKeyboard" element={<MidiKeyboard />} />

          <Route path="/drumKit" element={<DrumKit />} />

          <Route path="/musicPlayer" element={<MusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
