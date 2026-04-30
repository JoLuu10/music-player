import {useState, useRef } from "react";
import songs from "../data/songs";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

function Player(){
    const [currentSongIndex, setCurrentSongIndex] = useState(0); // currentSongIndex enseña la cancion que está sonando.
    const [isPlaying, setIsPlaying] = useState(false); // muestra si se está reproduciendo o no la canción.

    const audioRef = useRef(null); // Referencia al elemento de audio para controlar la reproducción.

    const currentSong = songs[currentSongIndex]; // Obtenemos la canción actual del array de canciones usando el índice actual.

    const togglePlay = () => { // Función para alternar entre reproducir y pausar la canción.
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => { // Función para pasar a la siguiente canción.
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        setIsPlaying(false);
    };

    return (
        <div>
            <h2>{currentSong.title}</h2>
            <p>{currentSong.artist}</p>

            <audio ref={audioRef} src={currentSong.src} />

            <Controls 
                isPlaying={isPlaying} 
                togglePlay={togglePlay} 
                nextSong={nextSong} 
            />

            <ProgressBar audioRef={audioRef} />
        </div>
    );
};