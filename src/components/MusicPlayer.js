import { useState } from "react";


export const MusicPlayer = () => {
    const[songs, setSongs] = useState(["hey", "prp", "beat01"]);
    const[currentSongIndex, setCurrentSongIndex] = useState(0);
    return (
      <div>
        <h1>Musicplayer</h1>
 

    <div class="music-container" id="music-container">
      <div class="music-info">
        <h4 id="title"></h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>

      <audio src="/music/hey.mp3" id="audio"></audio>

      <div class="img-container">
        <img src="images/prp.jpg" alt="music-cover" id="cover" />
      </div>
      <div class="navigation">
        <button id="prev" class="action-btn">
          <i class="fas fa-backward"></i>
        </button>
        <button id="play" class="action-btn action-btn-big">
          <i class="fas fa-play"></i>
        </button>
        <button id="next" class="action-btn">
          <i class="fas fa-forward"></i>
        </button>
      </div>
    </div>
    </div>
    );
   
}
   