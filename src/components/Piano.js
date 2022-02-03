import { useRef, useEffect } from "react";
import * as utils from "../utils/General";

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

  useEffect(() => {
    pianoElem.current.innerHTML = "Hallo2";
    svg = createMainSvg();
    pianoElem.current.appendChild(svg);
  });

  return (
    <div>
      <h1>Hallo</h1>
      <div ref={pianoElem}></div>
    </div>
  );
};
