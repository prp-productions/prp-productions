import { AudioManager } from "./AudioManager.js";
import { channelKeyMap } from "../utils/ChannelKeyMap.js";
// import { Piano } from "../components/Piano.js";

// const piano = new Piano();

const audioManager = new AudioManager();

export class MidiKeyboard {
  constructor(displayNotes, hideNotes) {
    console.log(displayNotes);
    this.displayNotes = displayNotes;
    this.hideNotes = hideNotes;
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(
        (midiAccess) => {
          midiAccess.addEventListener("statechange", this.updateDevices);
          const inputs = midiAccess.inputs;
          inputs.forEach((input) => {
            input.addEventListener("midimessage", this.handleInput);
          });
        },
        () => {
          console.log("Could not connect MIDI");
        }
      );
    }
  }

  handleInput = (input) => {
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    

    switch (command) {
      case 144: //noteOn
        if (velocity > 0) {
          audioManager.noteOn(note, velocity);
          //TODO: show notes on browser Keyboard //
          const stringNote = channelKeyMap[note.toString()];
          if (stringNote) this.displayNotes([stringNote]);
          console.log(
            "Note:",
            note,
            "Velocity:" + velocity,
            "(Anschlagdynamic):"
          );
        } else {
          audioManager.noteOff(note);
        }
        break;
      case 128: // note off
        this.hideNotes();
        audioManager.noteOff(note);
        break;
      default:
    }
  };

  updateDevices(event) {
    // document.getElementById(
    //   "show-connection"
    // ).innerHTML = `${event.port.state}`;
    console.log(
      `Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State, ${event.port.state}, Type ${event.port.type}`
    );
  }
}
