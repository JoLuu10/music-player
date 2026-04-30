function Controls({ isPlaying, togglePlay, nextSong }) { // Componente de controles que recibe las props necesarias para controlar la reproducción y cambiar de canción.
    return(
        <div>
            <button onClick={togglePlay}> // Botón para reproducir o pausar la canción, muestra "Play" o "Pause" según el estado de reproducción.
                {isPlaying ? "Pause" : "Play"}
            </button>

            <button onClick={nextSong}>
                Next
            </button>
        </div>
    );
}