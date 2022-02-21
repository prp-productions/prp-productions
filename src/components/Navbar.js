import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import { VscHome } from 'react-icons/vsc';
import { CgPiano } from 'react-icons/cg'
import { GiDrum } from 'react-icons/gi'
import { AiOutlinePlayCircle } from 'react-icons/ai'


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

          <VscHome/> 

          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/midiKeyboard"
          >
            <CgPiano/>
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/drumKit"
          >
            <GiDrum/>
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeClassName="selected"
            className="nav-link"
            to="/musicPlayer"
          >
            <AiOutlinePlayCircle/>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
