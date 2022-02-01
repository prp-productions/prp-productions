import { AudioManager } from "./audioManager.js";

const audioManager = new AudioManager();

export class RecordingManager {
  constructor() {
    this.isRecording = false;
    this.waveForm = "sine";
    this.recordingArray = [];
    this.recordButtonElem = document.querySelector(".recordButton");
    this.playButtonElem = document.querySelector(".playRecorded");
    let changeColorRecordMode = 0;

    this.recordButtonElem.addEventListener("click", () => {
      const colors = ["red", "white"];
      this.recordButtonElem.style.backgroundColor =
        colors[changeColorRecordMode];
      this.recordButtonElem.style.color = "black";
      changeColorRecordMode =
        changeColorRecordMode >= colors.length - 1
          ? 0
          : changeColorRecordMode + 1;

      this.isRecording = !this.isRecording;
    });

    this.playButtonElem.addEventListener("click", () => {
      console.log(this.isRecording);
      if (this.isRecording) {
        console.log("ERROR");
      } else {
        console.log("recordingArray", this.recordingArray);
        this.recordingArray.forEach((midiNote, index) => {
          setTimeout(() => {
            audioManager.noteOn(midiNote.note, midiNote.velocity);
            audioManager.noteOffWithDuration(
              midiNote.note,
              midiNote.playDuration
            ); // laenge der note
          }, (midiNote.playDuration + midiNote.waitDuration) * index); // abstand vom anfang der ersten Note bis zur naechsten Note
        });
      }
    });
  }

  recordIfNecessary(midiNote) {
    if (this.isRecording) this.recordingArray.push(midiNote);
    console.log(this.recordingArray);
  }

  overwriteDurationOfLastNoteIfIsNecessary(duration) {
    if (this.recordingArray.length > 0) {
      this.recordingArray[this.recordingArray.length - 1].waitDuration =
        duration;
    }
  }
}
