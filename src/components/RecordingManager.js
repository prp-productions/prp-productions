import { AudioManager } from "../classes/AudioManager.js";
import { useState } from "react";
import "../styles/recordingManager.scss";

const _recordingArray = localStorage.getItem("recordingArray");
console.log(_recordingArray);

export const RecordingManager = ({ audioManager }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [waveform, setWaveform] = useState("sine");
  const [recordingArray, setRecordingArray] = useState(
    _recordingArray === null ? [] : JSON.parse(_recordingArray)
  );

  const handlePlayButton = () => {
    if (isRecording) {
      alert("Please stop recording before playing");
    } else {
      console.log("recordingArray", recordingArray);
      recordingArray.forEach((midiNote, index) => {
        setTimeout(() => {
          audioManager.noteOn(midiNote.note, midiNote.velocity);
          // audioManager.noteOffWithDuration(
          //   midiNote.note,
          //   midiNote.playDuration
          // );
          audioManager.noteOffWithKeyPress(midiNote.note);
        }, 400 * index); // abstand vom anfang der ersten Note bis zur naechsten Note (midiNote.playDuration + midiNote.waitDuration) * index)
      });
    }
  };

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
      localStorage.setItem("recordingArray", JSON.stringify(recordingArray));
      setRecordingArray([...recordingArray]);
    }
  };

  const handleClearButton = () => {
    clearRecordingData();
  };

  const clearRecordingData = () => {
    localStorage.removeItem("recordingArray");
    setRecordingArray([]);
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
      <button className="clearButton" onClick={handleClearButton}>
        Clear
      </button>

      <div className="recordedNotes">
        {recordingArray.map((note) => JSON.stringify(note)).join(", ")}
      </div>
    </div>
  );
};
