import { useState } from "react";

export const MusicPlayer = () => {
    const[songs, setSongs] = useState(["hey", "prp", "beat01"]);
    const[currentSongIndex, setCurrentSongIndex] = useState(0);
    return (
      <div>
        <h1>Musicplayer</h1>
      </div>
    );


   
}
   