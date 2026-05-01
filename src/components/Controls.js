function Controls({ isPlaying, togglePlay, nextSong }) { // Componente de controles que recibe las props necesarias para controlar la reproducción y cambiar de canción.
    return(
        <div className="controls"> 
            <button onClick={togglePlay}> 
                {isPlaying ? "Pause" : "Play"}
            </button>

            <button onClick={nextSong}>
                Next
            </button>
        </div>
    );
}


export default Controls;