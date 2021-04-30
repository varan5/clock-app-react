import "./App.css";
import Clock from "../src/components/Clock";
import ClockTitle from "./components/ClockTitle";
import ClockImage from "./components/ClockImage";
import ClockGif from "./components/ClockGif";

function App() {
  return (
    <div className="App">
      <ClockGif />
      <ClockTitle />
      <Clock />
      <ClockImage />
    </div>
  );
}

export default App;
