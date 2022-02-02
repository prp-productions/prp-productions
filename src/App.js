import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { PageHome } from "./pages/PageHome";
import { PageMidiKeyboard } from "./pages/PageMidiKeyboard";
// import { PageDrumKit } from "./pages/PageDrumKit";
import { PageMusicPlayer } from "./pages/PageMusicPlayer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PageHome />} />

          <Route path="/midiKeyboard" element={<PageMidiKeyboard />} />

          {/* <Route path="/drumKit" element={<PageDrumKit />} /> */}

          <Route path="/musicPlayer" element={<PageMusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
