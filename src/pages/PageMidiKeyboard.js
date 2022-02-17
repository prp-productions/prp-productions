import { Piano } from "../components/Piano";
import "../styles/pageMidiKeyboard.css";

export const PageMidiKeyboard = () => {
  return (
    <div className="pagePiano-container">
      <h1>Playa Piano</h1>
      <div className="midi-tag">with MIDI connectivity</div>
      <Piano />
    </div>
  );
};
