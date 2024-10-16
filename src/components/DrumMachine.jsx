import DrumPad from "./DrumPad";
import Display from "./Display";
import React, { useState } from "react";
import "./DrumMachine.css";

export default function DrumMachine() {
  const [displayName, setDisplay] = useState("");

  const handleDisplay = (name) => {
    setDisplay(name);
  };
  return (
    <div className="drum-machine" id="drum-machine">
      <div className="container">
        <div className="item item-1">
          <DrumPad
            drumPadLetter="Q"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
            name="Heater 1"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-2">
          <DrumPad
            drumPadLetter="W"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
            name="Heater 2"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-3">
          <DrumPad
            drumPadLetter="E"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
            name="Heater 3"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-4">
          <DrumPad
            drumPadLetter="A"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
            name="Heater 4"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-5">
          <DrumPad
            drumPadLetter="S"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
            name="Heater 6"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-6">
          <DrumPad
            drumPadLetter="D"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
            name="Dsc Oh"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-7">
          <DrumPad
            drumPadLetter="Z"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
            name="Kick n Hat"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-8">
          <DrumPad
            drumPadLetter="X"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
            name="RP4 Kick 1"
            handleDisplay={handleDisplay}
          />
        </div>
        <div className="item item-9">
          <DrumPad
            drumPadLetter="C"
            link="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
            name="Cev H2"
            handleDisplay={handleDisplay}
          />
          </div>
          <div className="item item-10">
            <Display name={displayName} />
          </div>
        </div>
      </div>
  );
}
