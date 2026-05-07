import React, { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import "./Volumen.css";

const Volumen = ({ onChange }) => {
  const [volume, setVolume] = useState(70);
  const [showSlider, setShowSlider] = useState(false);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;

    setVolume(newVolume);

    if (onChange) {
      onChange(newVolume / 100);
    }
  };

  return (
    <div className="volumen-container">

      {showSlider && (
        <div className="slider-popup">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="volumen-slider"
          />
        </div>
      )}

      <button
        className="volume-btn"
        onClick={() => setShowSlider(!showSlider)}
      >
        <FaVolumeUp />
      </button>

    </div>
  );
};

export default Volumen;