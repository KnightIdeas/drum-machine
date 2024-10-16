import React, { useRef, useEffect } from "react";
import "./DrumPad.css";

const DrumPad = ({ drumPadLetter, link, name, handleDisplay }) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      handleDisplay(name);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === drumPadLetter) {
      if (audioRef.current) {
        audioRef.current.play();
        handleDisplay(name);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <button className="drum-pad" id={name} onClick={handleClick}>
        {drumPadLetter}
      </button>
      <audio
        ref={audioRef}
        src={link}
        className="clip"
        id={drumPadLetter}
      ></audio>
    </div>
  );
};

export default DrumPad;
