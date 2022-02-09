import { AudioManager } from "./AudioManager.js";
import { useState, useEffect, useRef } from "react";

const audioManager = new AudioManager();

export const RecordingManager = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [waveform, setWaveform] = useState("sine");
  const [recordingArray, setRecordingArray] = useState([]);

  //? this.recordButtonElem = document.querySelector(".recordButton");

  const [recordingIsPlaying, setRecordingIsPlaying] = useState(false);

  let changeColorRecordMode = 0;

  useEffect(() => {
    recordButtonElem.current.addEventListener("on", () => {
      setIsRecording(true);
    });
  }, []);

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  const recordIfNecessary = (midiNote) => {
    if (isRecording) {
      setRecordingArray(recordingArray.push(midiNote));
    }
    console.log(recordingArray);
  };

  const playRecording = () => {
    if ((isRecording = true)) {
      console.log("ERROR, I'm recording now!");
    } else {
      recordingArray.forEach((midiNote, index) => {
        setTimeout(() => {
          audioManager.noteOn(midiNote.note, midiNote.velocity);
          audioManager.noteOffWithDuration(
            midiNote.note,
            midiNote.playDuration
          );
        }, (midiNote.playDuration + midiNote.waitDuration) * index);
      });
    }
  };

  // this.playButtonElem.addEventListener("click", () => {
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
  const overwriteDurationOfLastNoteIfIsNecessary = () => {
    if (recordingArray.length > 0) {
      recordingArray[recordingArray.length - 1].waitDuration = duration;
    }
  };
  const recordButtonElem = useRef(null);

  return (
    <div className="recording-manager">
      <div className="button-container">
        <button className="record-button"></button> //* also stops recording
        <button className="play-stop-button"></button>
      </div>
    </div>
  );
};
