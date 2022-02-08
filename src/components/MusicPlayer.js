import { useState, useRef } from "react";

export const MusicPlayer = () => {
  const [songs, setSongs] = useState(["hey", "prp", "beat01"]);
  const [currentSongIndex, setCurrentSongIndex] = useState(1);

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
    audioElem.current.play();
  };

  const audioElem = useRef(null);

  return (
    <div className="page_musicplayer">
      <h1>Musicplayer</h1>
      <h4 id="title"> Current Song: {songs[currentSongIndex]}</h4>

      {/* TODO: styles in sass */}

      <div className="music-container" id="music-container">
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
            <i className="fas fa-play"></i>
          </button>
          <button id="next" onClick={handleNext} className="action-btn">
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
