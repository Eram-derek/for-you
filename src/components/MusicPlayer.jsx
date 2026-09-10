import { useEffect, useRef } from "react";
import musicFile from "../assets/music/love-song.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const startMusic = () => {
      if (!hasStarted.current && audioRef.current) {
        audioRef.current.play().catch(() => {});
        hasStarted.current = true;
      }
    };

    // Website e first click/touch e gaan shuru hobe
    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  return <audio ref={audioRef} src={musicFile} loop />;
}

export default MusicPlayer;
