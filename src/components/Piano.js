import { useRef, useEffect } from "react";
import * as utils from "../utils/General";
import { getNoteFromNoteName } from "../utils/ChannelKeyMap.js";
import { AudioManager } from "../classes/AudioManager.js";

const audioManager = new AudioManager();

export const Piano = () => {
  let svg = null;
  const range = ["C2", "C7"];
  const allNaturalNotes = getAllNaturalNotes(range);
  const whiteKeyWidth = 80;
  const pianoHeight = 400;
  const pianoWidth = allNaturalNotes.length * whiteKeyWidth;
  const pianoElem = useRef(null);

  const createMainSvg = () => {
    const returnSvg = utils.createSVGElement("svg");
    utils.setAttributes(returnSvg, {
      width: "100%",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: `0 0 ${pianoWidth} ${pianoHeight}`,
    });
    return returnSvg;
  };

  function getAllNaturalNotes([firstNote, lastNote]) {
    // Assign octave number, notes and positions to variables
    const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"];
    const firstNoteName = firstNote[0];
    const firstOctaveNumber = parseInt(firstNote[1]);
    const lastNoteName = lastNote[0];
    const lastOctaveNumber = parseInt(lastNote[1]);
    const firstNotePosition = naturalNotes.indexOf(firstNoteName);
    const lastNotePosition = naturalNotes.indexOf(lastNoteName);
    const notes = [];

    for (
      let octaveNumber = firstOctaveNumber;
      octaveNumber <= lastOctaveNumber;
      octaveNumber++
    ) {
      // Handle first octave
      if (octaveNumber === firstOctaveNumber) {
        naturalNotes.slice(firstNotePosition).forEach((noteName) => {
          notes.push(noteName + octaveNumber);
        });

        // Handle last octave
      } else if (octaveNumber === lastOctaveNumber) {
        naturalNotes.slice(0, lastNotePosition + 1).forEach((noteName) => {
          notes.push(noteName + octaveNumber);
        });
      } else {
        naturalNotes.forEach((noteName) => {
          notes.push(noteName + octaveNumber);
        });
      }
    }
    return notes;
  }

  function addWhiteKeys() {
    let whiteKeyPositionX = 0;
    this.allNaturalNotes.forEach((noteName) => {
      const whiteKeyTextGroup = utils.createSVGElement("g");
      const whiteKey = this.createKey({
        className: "white-key",
        width: this.whiteKeyWidth,
        height: this.pianoHeight,
      });
      //TODO change eventListener
      whiteKey.addEventListener("click", (e) => {
        if (this.ts2 !== 0) {
          this.ts1 = this.ts2;
        }
        this.ts2 = new Date().getTime();

        const noteName = e.target.getAttribute("data-note-name");
        console.log(noteName);
        const note = getNoteFromNoteName(noteName);
        const velocity = 35;
        for (let i = 0; i < 1; i++) {
          audioManager.noteOn(note, velocity);
        }

        audioManager.noteOffWithKeyPress(note);
        console.log("testing timestamp: ", this.ts1, this.ts2);
        const duration = this.ts1 === 0 ? 0 : Math.abs(this.ts2 - this.ts1);
        console.log("testing duration: ", duration);
        const playDuration = 200;

        const waitDuration = 0;
        this.recordingManager.overwriteDurationOfLastNoteIfIsNecessary(
          duration
        );
        console.log(note, velocity, playDuration, waitDuration);
        this.recordingManager.recordIfNecessary({
          note,
          velocity,
          playDuration,
          waitDuration,
        });
      });
      // TODO: DURATION!!! =>alternative setTimeout
      const text = utils.createSVGElement("text");
      utils.addTextContent(text, noteName);
      utils.setAttributes(whiteKeyTextGroup, { width: this.whiteKeyWidth });
      utils.setAttributes(text, {
        x: whiteKeyPositionX + this.whiteKeyWidth / 2,
        y: 380,
        "text-anchor": "middle",
      });
      utils.setAttributes(whiteKey, {
        x: whiteKeyPositionX,
        "data-note-name": noteName,
        rx: "15",
        ry: "15",
      });

      text.classList.add("white-key-text");
      whiteKeyTextGroup.appendChild(whiteKey);
      whiteKeyTextGroup.appendChild(text);
      this.svg.appendChild(whiteKeyTextGroup);
      whiteKeyPositionX += this.whiteKeyWidth;
    });
  }

  useEffect(() => {
    pianoElem.current.innerHTML = "Hallo2";
    svg = createMainSvg();
    addWhiteKeys();
    pianoElem.current.appendChild(svg);
  });

  return (
    <div>
      <h1>Hallo</h1>
      <div ref={pianoElem}></div>
    </div>
  );
};
