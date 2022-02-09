import { AudioManager } from "./AudioManager.js";
// import { useState, useEffect, useRef } from "react";

// const audioManager = new AudioManager();

export const RecordingManager = () => {
  //   const [isRecording, setIsRecording] = useState(false);
  //   const [waveform, setWaveform] = useState("sine");
  //   const [recordingArray, setRecordingArray] = useState([]);
  //   const [recordingIsPlaying, setRecordingIsPlaying] = useState(false);
  //   const recordButtonElem = useRef(null);
  //   const playButtonElem = useRef(null);

  //   let changeColorRecordMode = 0;

  //   useEffect(() => {
  //     recordButtonElem.current.addEventListener("on", () => {
  //       setIsRecording(true);
  //     });
  //   }, []);

  //   const handleRecord = () => {
  //     setIsRecording(!isRecording);
  //   };

  //   const recordIfNecessary = (midiNote) => {
  //     if (isRecording) {
  //       setRecordingArray(recordingArray.push(midiNote));
  //     }
  //     console.log(recordingArray);
  //   };

  // const PlayRecording = () => {
  //   if ((isRecording = true)) {
  //     console.log("ERROR, I'm recording now!");
  //   } else {
  //     recordingArray.forEach((midiNote, index) => {
  //       setTimeout(() => {
  //         audioManager.noteOn(midiNote.note, midiNote.velocity);
  //         audioManager.noteOffWithDuration(
  //           midiNote.note,
  //           midiNote.playDuration
  //         );
  //       }, (midiNote.playDuration + midiNote.waitDuration) * index);
  //     });
  //     setRecordingIsPlaying(true);
  //     console.log("hi hi hi hi hi hihaskljdhf;awohisdxn");
  //   }
  // };

  const sayHi = () => {
    console.log("hi hi hi hi hi hihaskljdhf;awohisdxn");
  };

  // const overwriteDurationOfLastNoteIfIsNecessary = () => {
  //   if (recordingArray.length > 0) {
  //     recordingArray[recordingArray.length - 1].waitDuration = duration;
  //   }
  // };
  //! let Piano handle all UI
  return (
    <div className="recording-manager">
      <div className="button-container">
        <button className="record-button">Record</button>
        <button className="play-stop-button" onClick={() => sayHi()}>
          Start stop
        </button>
      </div>
    </div>
  );
};
