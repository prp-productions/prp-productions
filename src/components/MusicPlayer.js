import { MusicPlayer } from "../classes/MusicPlayer.js";
import "../styles/musicPlayer.css";

const musicPlayer = new MusicPlayer();

export const MusicPlayer = () => {
    return(
        <div className="music-player">Music player</div>
    )
}