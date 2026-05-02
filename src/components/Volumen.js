import React, { useState } from 'react';
import './Volumen.css';

const Volumen = ({ onChange }) => { // Componente de control de volumen que recibe una función onChange para manejar los cambios de volumen.
  const [volume, setVolume] = useState(70);

  const handleVolumeChange = (e) => { // Función que se ejecuta cuando el usuario cambia el valor del slider de volumen.
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (onChange) {
      onChange(newVolume / 100);
    }
  };

  return ( /* Componente de control de volumen que muestra un slider para ajustar el volumen y un valor numérico. */
    <div className="volumen-container">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="volumen-slider"
      />
      <span className="volumen-valor">{volume}%</span>
    </div>
  );
};

export default Volumen;
