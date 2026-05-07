import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

function Controls({ isPlaying, togglePlay, nextSong, prevSong }) {
    return(
        <div className="controls"> 
            <button onClick={prevSong}> 
                <FaBackward />
            </button>

            <button onClick={togglePlay}> 
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button onClick={nextSong}>
                <FaForward />
            </button>
        </div>
    );
}

export default Controls;