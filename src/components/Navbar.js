import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/"
          >
            PRP-Productions
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/midiKeyboard"
          >
            MidiKeyboard
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/drumKit"
          >
            DrumKit
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/musicPlayer"
          >
            MusicPlayer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
