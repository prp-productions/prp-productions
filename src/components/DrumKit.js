import "../styles/drumKit.css";
import { Howl, Howler } from "howler";
import React from "react";
import keydown, { Keys } from "react-keydown";
import { useState, useEffect } from "react";

export const DrumKit = () => {
  const [pressedKey, setPressedKey] = useState("");
  const handleKeyPress = (e) => {
    setPressedKey(e.key);
    switch (e.key) {
      case "1":
        playClap();
        break;

      case "2":
        playClHiHat();
        break;
      case "3":
        playCrash();
        break;
      case "7":
        playKick();
        break;
      case "8":
        playOpHiHat();
        break;
      case "9":
        playSnare();
        break;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPressedKey("");
    }, 200);
  }, [pressedKey]);

  const drums = new Howl({
    src: [
      "./mediaDirectory/drumSounds/drums.webm",
      "./mediaDirectory/drumSounds/drums.mp3",
    ],
    sprite: {
      "CYCdh_AcouKick-14": [0, 625.8503401360545],
      "CYCdh_Crash-01": [2000, 15228.571428571428],
      "CYCdh_Kurz02-Snr02": [19000, 496.82539682539687],
      "CYCdh_LudRimC-07": [21000, 1442.879818594104],
      "CYCdh_Sab_ClHat-06": [24000, 619.0476190476204],
      "KHats Open-07": [26000, 2863.582766439908],
    },
  });

  // links sounds to pads
  function playDrum(event) {
    if (event.target.classList.contains("pad")) {
      event.preventDefault();
      let soundToPlay = event.target.dataset.sound;
      drums.play(soundToPlay);
    }
  }

  // allows individual pads to be played
  function playSnare() {
    let soundToPlay = "CYCdh_Kurz02-Snr02";
    console.log(soundToPlay);
    drums.play(soundToPlay);
  }
  function playCrash() {
    let soundToPlay = "CYCdh_Crash-01";
    console.log(soundToPlay);
    drums.play(soundToPlay);
  }
  function playClap() {
    let soundToPlay = "CYCdh_LudRimC-07";
    console.log(soundToPlay);
    drums.play(soundToPlay);
  }
  function playClHiHat() {
    let soundToPlay = "CYCdh_Sab_ClHat-06";
    console.log(soundToPlay);
    drums.play(soundToPlay);
  }
  function playOpHiHat() {
    let soundToPlay = "KHats Open-07";
    console.log(soundToPlay);
    drums.play(soundToPlay);
  }
  function playKick() {
    let soundToPlay = "CYCdh_AcouKick-14";
    console.log(soundToPlay);
    drums.play(soundToPlay);
    if (keydown.e) {
      drums.play(soundToPlay);
      console.log("k");
    }
  }
  // allows mouse click to play pads
  function handleDrumClick(soundToPlay) {
    drums.play(soundToPlay);
    console.log(soundToPlay, drums);
  }
  // defines pad classNames for dynamic styling.
  const getDrumClasses = (kind) => {
    return `pad ${kind}${pressedKey === "1" ? " playing" : ""}`;
  };

  return (
    <div className="drumkit" onKeyPress={(e) => handleKeyPress(e)} tabIndex="0">
      <div
        className={getDrumClasses("clap")}
        onClick={() => handleDrumClick("CYCdh_LudRimC-07")}
      >
        <img src="images/drumKitIcons/clap.png" alt="clap" />
      </div>
      <div
        className="pad clHat"
        onClick={() => handleDrumClick("CYCdh_Sab_ClHat-06")}
      >
        <img
          src="images/drumKitIcons/closed_high_hat.png"
          alt="closed high hat"
        />
      </div>
      <div
        className="pad crash"
        onClick={() => handleDrumClick("CYCdh_Crash-01")}
      >
        <img src="images/drumKitIcons/crash.png" alt="crash" />
      </div>

      <div
        className="pad kick"
        onClick={() => handleDrumClick("CYCdh_AcouKick-14")}
      >
        <img src="images/drumKitIcons/kick.png" alt="kick" />
      </div>
      <div
        className="pad opHat"
        onClick={() => handleDrumClick("KHats Open-07")}
      >
        <img src="images/drumKitIcons/open_high_hat.png" alt="open high hat" />
      </div>
      <div
        className="pad snare"
        onClick={() => handleDrumClick("CYCdh_Kurz02-Snr02")}
      >
        <img src="images/drumKitIcons/snare.png" alt="clap" />
      </div>
    </div>
  );
};
export default DrumKit;
