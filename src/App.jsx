import "./App.css";

import SideBar from "./SideBar";
import JokeList from "./JokeList";
function App() {
  return (
    <div className="App">
      <div className="clip-path">
        <div className="jokes-card">
          <SideBar />
          <JokeList />
        </div>
      </div>
    </div>
  );
}

export default App;
