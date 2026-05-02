import { useState, useRef } from "react";
import songs from "../data/songs";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import Volumen from "./Volumen";
import "./Player.css";

function Player() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const audioRef = useRef(null);
  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
    setIsPlaying(false);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div
      className="player"
      style={{
        backgroundImage: `url(${currentSong.cover})`
      }}
    >
      <div className="overlay">
        <div className="player-card">
          <img
            src={currentSong.cover}
            alt="cover"
            className="cover"
          />

          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>

          <audio ref={audioRef} src={currentSong.src} />  {/* Elemento de audio que utiliza la referencia para controlar la reproducción y el volumen. */}

          <ProgressBar audioRef={audioRef} /> {/* Componente de barra de progreso que recibe la referencia del audio para mostrar el progreso de la canción. */}

          <Volumen onChange={handleVolumeChange} /> {/* Componente de volumen que recibe la función para manejar el cambio de volumen. */}  

          <Controls
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            nextSong={nextSong}
            prevSong={prevSong}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;