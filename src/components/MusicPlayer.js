import { useState } from "react";

export const MusicPlayer = () => {
  const [songs, setSongs] = useState(["hey", "prp", "beat01"]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const handleNext = () => {
    console.log("next");
  };
  const handlePrev = () => {
    console.log("prev");
  };
  return (
    <div className="page_musicplayer">
      <h1>Musicplayer</h1>
      {/* TODO: styles in sass */}

      <div className="music-container" id="music-container">
        <div className="music-info">
          <h4 id="title"></h4>
          <div className="progress-container" id="progress-container">
            <div className="progress" id="progress"></div>
          </div>
        </div>

        <audio src="/music/hey.mp3" id="audio"></audio>

        <div className="img-container">
          <img src="images/musicplayer/prp.jpg" alt="music-cover" id="cover" />
        </div>
        <div className="navigation">
          <button id="prev" onClick={handlePrev} className="action-btn">
            <i className="fas fa-backward"></i>
          </button>
          <button id="play" className="action-btn action-btn-big">
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
