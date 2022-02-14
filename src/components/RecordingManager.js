import { AudioManager } from "../classes/AudioManager.js";
import { useState } from "react";
import "../styles/recordingManager.scss";
//const audioManager = new AudioManager();

export const RecordingManager = ({ audioManager }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [waveform, setWaveform] = useState("sine");
  const [recordingArray, setRecordingArray] = useState([]);
  // this.recordButtonElem = document.querySelector(".recordButton");
  // this.playButtonElem = document.querySelector(".playRecorded");
  // let changeColorRecordMode = 0;

  // this.recordButtonElem.addEventListener("click", () => {
  //   const colors = ["red", "white"];
  //   this.recordButtonElem.style.backgroundColor =
  //     colors[changeColorRecordMode];
  //   this.recordButtonElem.style.color = "black";
  //   changeColorRecordMode =
  //     changeColorRecordMode >= colors.length - 1
  //       ? 0
  //       : changeColorRecordMode + 1;

  //   this.isRecording = !this.isRecording;
  // });

  //   this.playButtonElem.addEventListener("click", () => {
  //     console.log(this.isRecording);
  //     if (this.isRecording) {
  //       console.log("ERROR");
  //     } else {
  //       console.log("recordingArray", this.recordingArray);
  //       this.recordingArray.forEach((midiNote, index) => {
  //         setTimeout(() => {
  //           audioManager.noteOn(midiNote.note, midiNote.velocity);
  //           audioManager.noteOffWithDuration(
  //             midiNote.note,
  //             midiNote.playDuration
  //           ); // laenge der note
  //         }, (midiNote.playDuration + midiNote.waitDuration) * index); // abstand vom anfang der ersten Note bis zur naechsten Note
  //       });
  //     }
  //   });
  // }

  const handlePlayButton = () => {
    if (isRecording) {
      console.log("ERROR currently recording");
    } else {
      console.log("recordingArray", recordingArray);
      recordingArray.forEach((midiNote, index) => {
        setTimeout(() => {
          audioManager.noteOn(midiNote.note, midiNote.velocity);
          audioManager.noteOffWithDuration(
            midiNote.note,
            midiNote.playDuration
          );
        }, 300); // abstand vom anfang der ersten Note bis zur naechsten Note (midiNote.playDuration + midiNote.waitDuration) * index)
      });
    }
  };
  // const recordIfNecessary = (midiNote) => {
  //   if (this.isRecording) this.recordingArray.push(midiNote);
  //   console.log(this.recordingArray);
  // };

  // overwriteDurationOfLastNoteIfIsNecessary(duration) {
  //   if (this.recordingArray.length > 0) {
  //     this.recordingArray[this.recordingArray.length - 1].waitDuration =
  //       duration;
  //   }
  // }
  const handleRecordButton = () => {
    setIsRecording(!isRecording);

    console.log(recordingArray);
  };

  const recordMidiNote = (midiNote) => {
    if (isRecording) {
      recordingArray.push(midiNote);
      setRecordingArray([...recordingArray]);
    }
  };

  audioManager.injectRecordNote(recordMidiNote);

  return (
    <div className="component_recordingManager">
      <button
        className={`recordButton${isRecording ? " recording" : ""}`}
        onClick={handleRecordButton}
      >
        <span>Record</span>
      </button>
      <button className="playButton" onClick={handlePlayButton}>
        Play
      </button>

      <div className="recordedNotes">
        {recordingArray.map((note) => note).join(", ")}
      </div>
    </div>
  );
};
