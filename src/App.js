import "./styles.css";
import DrumMachine from "./components/DrumMachine";

export default function App() {
  return (
    <div className="App">
      <h2 className="title">Grid Based Drum Machine</h2>
      <DrumMachine />
      <p className="guidance-text">Click on the drum buttons or press the corresponding keys to play drum samples</p>
    </div>
  );
}
