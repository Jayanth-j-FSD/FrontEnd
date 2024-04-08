import "./styles.scss";
import React from "react";
// import NaviBar from "./components/NaviBar.js";
// import DynamicGraph from "./components/DynamicGraph.js";
// import Colors from "./components/Colors.js";
import Home from "./components/Home.js";
function App() {
  // const [tabState, setTabState] = useState("home");

  // const handleClick = (name) => {
  //   setTabState(name);
  // };

  return (
    <div class="App">
      {/* <div class="top-nav">
        <div className="App-top-nav">
          <NaviBar></NaviBar>
        </div>
      </div>
      <div class="left-menu">
        <div className="App-left-Menu">
          <div className="graph" onClick={() => handleClick("dashboard")}>
            <DynamicGraph></DynamicGraph>
          </div>
          <div className="home-btn" onClick={() => handleClick("home")}>
            Home
          </div>
          <div className="color-btn" onClick={() => handleClick("colors")}>
            colors
          </div>
          <div className="pallete-btn" onClick={() => handleClick("pallete")}>
            Pallete
          </div>
          <div
            className="template-btn"
            onClick={() => handleClick("webTemplate")}
          >
            Web Template colors
          </div>
        </div>
      </div>
      <div class="content">
        <div class="App-data-colors">
          <div>
            {tabState === "colors" ? (
              <div>
                <Colors></Colors>
              </div>
            ) : tabState === "home" ? (
              <div>HomePage</div>
            ) : tabState === "dashboard" ? (
              <div>Dash Board</div>
            ) : (
              tabState
            )}
          </div>
        </div>
      </div> */}
      <Home></Home>
    </div>
  );
}

export default App;
