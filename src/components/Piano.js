import { useRef, useEffect } from "react";
import * as utils from "../utils/General";
import { getNoteFromNoteName } from "../utils/ChannelKeyMap.js";
import { AudioManager } from "../classes/AudioManager.js";
import { MidiKeyboard } from "../classes/MidiKeyboard";
// import { RecordingManager } from '../classes/RecordingManager';
import "../styles/piano.css";

const audioManager = new AudioManager();
// const recordingManager = new RecordingManager();

export const Piano = () => {
  let svg = null;
  const range = ["C2", "C7"];
  const allNaturalNotes = getAllNaturalNotes(range);
  const whiteKeyWidth = 80;
  const pianoHeight = 400;
  const pianoWidth = allNaturalNotes.length * whiteKeyWidth;
  const pianoElem = useRef(null);
  let ts1 = 0;
  let ts2 = 0;
  const naturalNotesSharps = ["C", "D", "F", "G", "A"];
  const naturalNotesFlats = ["D", "E", "G", "A", "B"];

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
    allNaturalNotes.forEach((noteName) => {
      const whiteKeyTextGroup = utils.createSVGElement("g");
      const whiteKey = createKey({
        className: "white-key",
        width: whiteKeyWidth,
        height: pianoHeight,
      });
      //TODO change eventListener
      whiteKey.addEventListener("click", (e) => {
        if (ts2 !== 0) {
          ts1 = ts2;
        }
        ts2 = new Date().getTime();

        const noteName = e.target.getAttribute("data-note-name");
        console.log(noteName);
        const note = getNoteFromNoteName(noteName);
        const velocity = 35;
        for (let i = 0; i < 1; i++) {
          audioManager.noteOn(note, velocity);
        }

        audioManager.noteOffWithKeyPress(note);
        console.log("testing timestamp: ", ts1, ts2);
        const duration = ts1 === 0 ? 0 : Math.abs(ts2 - ts1);
        console.log("testing duration: ", duration);
        const playDuration = 200;

        const waitDuration = 0;

        //   recordingManager.overwriteDurationOfLastNoteIfIsNecessary(
        //     duration
        //   );
        //   console.log(note, velocity, playDuration, waitDuration);
        //   recordingManager.recordIfNecessary({
        //     note,
        //     velocity,
        //     playDuration,
        //     waitDuration,
        //   });
      });
      // TODO: DURATION!!! =>alternative setTimeout

      const text = utils.createSVGElement("text");
      utils.addTextContent(text, noteName);
      utils.setAttributes(whiteKeyTextGroup, { width: whiteKeyWidth });
      utils.setAttributes(text, {
        x: whiteKeyPositionX + whiteKeyWidth / 2,
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
      svg.appendChild(whiteKeyTextGroup);
      whiteKeyPositionX += whiteKeyWidth;
    });
  }

  function addBlackKeys() {
    let blackKeyPositionX = 60;
    allNaturalNotes.forEach((naturalNote, index, array) => {
      // If last iteration of keys, do not add black key
      if (index === array.length - 1) {
        return;
      }
      const blackKeyTextGroup = utils.createSVGElement("g");
      const blackKey = createKey({
        className: "black-key",
        width: whiteKeyWidth / 2,
        height: pianoHeight / 1.6,
      });

      blackKey.addEventListener("click", (e) => {
        const noteName = e.target.getAttribute("data-sharp-name");
        console.log("NoteName-sharp:", noteName);
        const note = getNoteFromNoteName(noteName);
        const velocity = 35;
        for (let i = 0; i < 1; i++) {
          audioManager.noteOn(note, velocity);
          console.log(blackKey);
        }
        audioManager.noteOffWithKeyPress(note);
        // recordingManager.recordIfNecessary({ note, velocity });
      });

      const flatNameText = utils.createSVGElement("text");
      const sharpNameText = utils.createSVGElement("text");

      utils.setAttributes(blackKeyTextGroup, { width: whiteKeyWidth / 2 });

      for (let i = 0; i < naturalNotesSharps.length; i++) {
        let naturalSharpNoteName = naturalNotesSharps[i];
        let naturalFlatNoteName = naturalNotesFlats[i];

        if (naturalSharpNoteName === naturalNote[0]) {
          utils.setAttributes(blackKey, {
            x: blackKeyPositionX,
            "data-sharp-name": `${naturalSharpNoteName}#${naturalNote[1]}`,
            "data-flat-name": `${naturalFlatNoteName}b${naturalNote[1]}`,
            rx: "8",
            ry: "8",
          });
          utils.setAttributes(sharpNameText, {
            "text-anchor": "middle",
            y: 215,
            x: blackKeyPositionX + whiteKeyWidth / 4,
          });

          utils.setAttributes(flatNameText, {
            "text-anchor": "middle",
            y: 235,
            x: blackKeyPositionX + whiteKeyWidth / 4,
          });
          utils.addTextContent(sharpNameText, `${naturalSharpNoteName}♯`);
          utils.addTextContent(flatNameText, `${naturalFlatNoteName}♭`);

          flatNameText.classList.add("black-key-text");
          sharpNameText.classList.add("black-key-text");

          // Add double spacing between D# and A#
          if (naturalSharpNoteName === "D" || naturalSharpNoteName === "A") {
            blackKeyPositionX += whiteKeyWidth * 2;
          } else {
            blackKeyPositionX += whiteKeyWidth;
          }
          blackKeyTextGroup.appendChild(blackKey);
          blackKeyTextGroup.appendChild(flatNameText);
          blackKeyTextGroup.appendChild(sharpNameText);
        }
      }
      svg.appendChild(blackKeyTextGroup);
    });
  }

  function createKey({ className, width, height }) {
    const key = utils.createSVGElement("rect");
    key.classList.add(className, "key");
    utils.setAttributes(key, { width: width, height: height });
    return key;
  }

  // function createOctave(octaveNumber) {
  //   //! WTF is octaveWidth?
  //   console.log(octaveNumber);
  //   const octaveWidth = 100;
  //   const octave = utils.createSVGElement("g");
  //   octave.classList.add("octave");

  //   octave.setAttribute(
  //     "transform",

  //     `translate(${octaveNumber * octaveWidth}, 0)`
  //   );
  //   return octave;
  // }

  function hideNotes() {
    const pianoKeys = pianoElem.current.querySelectorAll(".key");
    utils.removeClassFromNodeCollection(pianoKeys, "show");
  }

  function displayNotes(notes) {
    // const pianoKeys = document.querySelectorAll(".key");
    const pianoKeys = pianoElem.current.querySelectorAll(".key");
    notes.forEach((noteName) => {
      pianoKeys.forEach((key) => {
        const naturalName = key.dataset.noteName;
        const sharpName = key.dataset.sharpName;
        const flatName = key.dataset.flatName;
        if (
          naturalName === noteName ||
          sharpName === noteName ||
          flatName === noteName
        ) {
          key.classList.add("show");
        }
      });
    });
  }

  useEffect(() => {
    new MidiKeyboard(displayNotes, hideNotes);
    pianoElem.current.innerHTML = "";
    svg = createMainSvg();
    addWhiteKeys();
    addBlackKeys();
    // createOctave();
    // displayNotes();
    pianoElem.current.appendChild(svg);
  });

  return (
    <div>
      <div ref={pianoElem}></div>
    </div>
  );
};
