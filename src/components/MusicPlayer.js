import { useState, useRef, useEffect } from "react";
import { AudioManager } from "../classes/AudioManager.js";

const audioManager = new AudioManager();

export const MusicPlayer = () => {
  const [songs, setSongs] = useState(["Hey", "PRP", "Beat01"]);
  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const [recordingArray, setRecordingArray] = useState([]);

  useEffect(() => {
    audioElem.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    const rawRecordingArray = localStorage.getItem("recordingArray");
    const _recordingArray =
      rawRecordingArray === null ? [] : JSON.parse(rawRecordingArray);
    setRecordingArray(_recordingArray);
    console.log(_recordingArray);
  }, []);

  const handleNext = () => {
    let _currentSongIndex = currentSongIndex + 1;
    if (_currentSongIndex > songs.length - 1) {
      _currentSongIndex = 0;
    }
    setCurrentSongIndex(_currentSongIndex);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    let _currentSongIndex = currentSongIndex - 1;
    if (_currentSongIndex < 0) {
      _currentSongIndex = songs.length - 1;
    }
    setCurrentSongIndex(_currentSongIndex);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    if (isPlaying) {
      audioElem.current.pause();
      setIsPlaying(false);
    } else {
      audioElem.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlayRecording = () => {
    recordingArray.forEach((midiNote, index) => {
      setTimeout(() => {
        audioManager.noteOn(midiNote.note, midiNote.velocity);
        audioManager.noteOffWithKeyPress(midiNote.note);
      }, 400 * index);
      console.log(midiNote); // abstand vom anfang der ersten Note bis zur naechsten Note (midiNote.playDuration + midiNote.waitDuration) * index)
    });
  };

  const audioElem = useRef(null);

  //   this.musicContainer.classList.add("play");
  //   this.playBtn.querySelector("i.fas").classList.remove("fa-play");
  //   this.playBtn.querySelector("i.fas").classList.add("fa-pause");

  //   audio.play();
  // }

  // pauseSong() {
  //   this.musicContainer.classList.remove("play");
  //   this.playBtn.querySelector("i.fas").classList.add("fa-play");
  //   this.playBtn.querySelector("i.fas").classList.remove("fa-pause");

  return (
    <div className="page_musicplayer">
      <h1>Musicplayer</h1>

      {/* TODO: styles in sass */}

      <div
        className={`music-container ${isPlaying ? " play" : ""}`}
        id="music-container"
      >
        <div className="music-info">
          <h4 id="title"> Current Song: {songs[currentSongIndex]}</h4>
          <div className="progress-container" id="progress-container">
            <div className="progress" id="progress"></div>
          </div>
        </div>

        <audio
          src={`mediaDirectory/music/${songs[currentSongIndex]}.mp3`}
          id="audio"
          ref={audioElem}
        ></audio>

        <div className="img-container">
          <img src="images/musicplayer/prp.jpg" alt="music-cover" id="cover" />
        </div>
        <div className="navigation">
          <button id="prev" onClick={handlePrev} className="action-btn">
            <i className="fas fa-backward"></i>
          </button>
          <button
            id="play"
            onClick={handlePlay}
            className="action-btn action-btn-big"
          >
            {!isPlaying && <i className="fas fa-play"></i>}
            {isPlaying && <i className="fas fa-pause"></i>}
          </button>
          <button id="next" onClick={handleNext} className="action-btn">
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>

      {recordingArray.length > 0 && (
        <button onClick={() => handlePlayRecording()}>Play Recording</button>
      )}
    </div>
  );
};
