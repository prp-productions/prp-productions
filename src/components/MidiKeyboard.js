import { channelKeyMap } from "../utils/ChannelKeyMap.js";

export const MidiKeyboard = ({ displayNotes, hideNotes, audioManager }) => {
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(
      (midiAccess) => {
        // midiAccess.addEventListener("statechange", updateDevices);
        const inputs = midiAccess.inputs;
        inputs.forEach((input) => {
          input.addEventListener("midimessage", (input) => {
            const command = input.data[0];
            const note = input.data[1];
            const velocity = input.data[2];

            switch (command) {
              case 144: //noteOn
                if (velocity > 0) {
                  audioManager.noteOn(note, velocity);
                  const stringNote = channelKeyMap[note.toString()];
                  if (stringNote) displayNotes([stringNote]);
                } else {
                  audioManager.noteOff(note);
                }
                break;
              case 128: // note off
                hideNotes();
                audioManager.noteOffWithKeyPress(note);
                break;
              default:
            }
          });
        });
      },
      () => {
        console.log("Could not connect MIDI");
      }
    );
  }

  // const updateDevices = (event) => {
  //   console.log(
  //     `Name: ${event.port.name}, Brand: ${event.port.manufacturer},
  //     State, ${event.port.state}, Type ${event.port.type}`
  //   );
  // };
  return <div></div>;
};
