import { useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import musicFile from "../assets/music/love-song.mp3";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-btn" onClick={toggleMusic}>
      <audio ref={audioRef} src={musicFile} loop />
      {isPlaying ? <FaMusic size={16} /> : <FaVolumeMute size={16} />}
      <span>{isPlaying ? "playing 🎶" : "play song"}</span>
    </div>
  );
}

export default MusicPlayer;
