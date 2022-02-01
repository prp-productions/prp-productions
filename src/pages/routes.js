import React from 'react';
import { Route, Router } from 'react-router';
import Home from './components/home.js';
import Drumkit from '.components/drumkit.js';
import MidiKeyboard from './components/midiKeyboard.js';
import MusicPlayer from './components/musicPlayer.js';
import Navbar from '../components/Navbar.js'

const Routes = () => {
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
}

export default Routes