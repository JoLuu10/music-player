import { useState, useEffect } from "react";

function ProgressBar({ audioRef }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        const { currentTime, duration } = audioRef.current;

        if (duration) {
          setProgress((currentTime / duration) * 100);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [audioRef]);

  const handleClick = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;

    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickX / width) * duration;
  };

  return (
    <div
      onClick={handleClick} // Permite al usuario hacer clic en la barra para cambiar la posición de reproducción.
      style={{
        width: "100%",
        height: "10px",
        background: "#ccc",
        cursor: "pointer"
      }}
    >
      <div
        style={{ // Estilo de la barra de progreso que se llena según el progreso actual de la canción.
          width: `${progress}%`,
          height: "100%",
          background: "red"
        }}
      />
    </div>
  );
}

export default ProgressBar;