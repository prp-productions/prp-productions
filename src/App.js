import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Drumkit from "./components/Drumkit";
import MidiKeyboard from "./components/MidiKeyboard.js";
import MusicPlayer from "./components/MusicPlayer.js";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" />
          <Home />

          <Route path="/midiKeyboard" />
          <MidiKeyboard />

          <Route path="/drumKit" />
          <Drumkit />

          <Route path="/musicPlayer" />
          <MusicPlayer />
        </div>
      </Router>
    </div>
  );
}

export default App;
