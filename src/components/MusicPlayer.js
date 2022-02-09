import { useState, useRef } from "react";

export const MusicPlayer = () => {
  const [songs, setSongs] = useState(["hey", "prp", "beat01"]);
  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    let _currentSongIndex = currentSongIndex + 1;
    if (_currentSongIndex > songs.length - 1) {
      _currentSongIndex = 0;
    }
    setCurrentSongIndex(_currentSongIndex);
  };

  const handlePrev = () => {
    let _currentSongIndex = currentSongIndex - 1;
    if (_currentSongIndex < 0) {
      _currentSongIndex = songs.length - 1;
    }
    setCurrentSongIndex(_currentSongIndex);
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

          <h4 id="title"> Current Song: {songs[currentSongIndex]}</h4>
        </div>
      </div>
    </div>
  );
};
