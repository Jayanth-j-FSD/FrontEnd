import "./styles.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getUsers } from "./api";
import "./components/Loader.jsx";
import NaviBar from "./components/NaviBar.js";

function App() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true); // Add loading state

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       const users = await getUsers();
  //       setUsers(users); // Update users state
  //       setLoading(false); // Update loading state
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     }
  //   }

  //   fetchUsers();
  // }, []);

  // Conditional rendering based on loading state
  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }
  const colors = {
    red: [
      "#FF0000",
      "#FF1A1A",
      "#FF3333",
      "#FF4D4D",
      "#FF6666",
      "#FF8080",
      "#FF9999",
      "#FFB3B3",
      "#FFCCCC",
      "#FFE6E6",
    ],
    orange: [
      "#FF7F00",
      "#FF8F1A",
      "#FF9F33",
      "#FFAF4D",
      "#FFBF66",
      "#FFCF80",
      "#FFDF99",
      "#FFEFB3",
      "#FFFECB",
      "#FFFFE6",
    ],
    yellow: [
      "#FFFF00",
      "#FFFF1A",
      "#FFFF33",
      "#FFFF4D",
      "#FFFF66",
      "#FFFF80",
      "#FFFF99",
      "#FFFFB3",
      "#FFFFCC",
      "#FFFFE6",
    ],
    green: [
      "#00FF00",
      "#1AFF1A",
      "#33FF33",
      "#4DFF4D",
      "#66FF66",
      "#80FF80",
      "#99FF99",
      "#B3FFB3",
      "#CCFFCC",
      "#E6FFE6",
    ],
    blue: [
      "#0000FF",
      "#1A1AFF",
      "#3333FF",
      "#4D4DFF",
      "#6666FF",
      "#8080FF",
      "#9999FF",
      "#B3B3FF",
      "#CCCCFF",
      "#E6E6FF",
    ],
    purple: [
      "#7F00FF",
      "#8F1AFF",
      "#9F33FF",
      "#AF4DFF",
      "#BF66FF",
      "#CF80FF",
      "#DF99FF",
      "#EFB3FF",
      "#FFCCFF",
      "#FFE6FF",
    ],
    pink: [
      "#FF007F",
      "#FF1A8C",
      "#FF3399",
      "#FF4DA6",
      "#FF66B3",
      "#FF80BF",
      "#FF99CC",
      "#FFB3D9",
      "#FFCCE6",
      "#FFE6F2",
    ],
    brown: [
      "#8B4513",
      "#9F5F1A",
      "#B27D33",
      "#C2994D",
      "#D1B366",
      "#E0CC80",
      "#EED999",
      "#F6EDB3",
      "#FDF6CC",
      "#FFFDE6",
    ],
    gray: [
      "#808080",
      "#8C8C8C",
      "#999999",
      "#A6A6A6",
      "#B3B3B3",
      "#BFBFBF",
      "#CCCCCC",
      "#D9D9D9",
      "#E6E6E6",
      "#F2F2F2",
    ],
    black_white: [
      "#000000",
      "#191919",
      "#333333",
      "#4C4C4C",
      "#666666",
      "#7F7F7F",
      "#999999",
      "#B2B2B2",
      "#CCCCCC",
      "#E5E5E5",
    ],
  };
  const [copiedText, setCopiedText] = useState(null);

  // Function to handle copying text to clipboard
  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 1500); // Clear copied text message after 1.5 seconds
      })
      .catch((err) => console.error("Error copying to clipboard:", err));
  };
  return (
    // <div className="App">
    // <div className="App-top-nav">
    //   <NaviBar></NaviBar>
    // </div>

    //   <div className="App-data-colors">
    //     <h1>Colour codes</h1>
    //     {/* <ul>
    //       {users.map((user) => (
    //         <li key={user.id}>{user.first_name}</li>
    //       ))}
    //     </ul> */}
    //     <div>
    //       <ul>
    //         {Object.entries(colors).map(([colorName, shades]) => (
    //           <li key={colorName}>
    //             <strong>{colorName}</strong>
    //             <ul>
    //               {shades.map((shade, index) => (
    //                 <li
    //                   key={index}
    //                   style={{ backgroundColor: shade }}
    //                   onClick={() => handleCopyToClipboard(shade)}
    //                 >
    //                   <span>{shade}</span>
    //                   <button onClick={() => handleCopyToClipboard(shade)}>
    //                     Copy
    //                   </button>
    //                   {copiedText === shade && (
    //                     <span
    //                       className="copied"
    //                       style={{ marginLeft: "0.5rem", color: "green" }}
    //                     >
    //                       Copied!
    //                     </span>
    //                   )}
    //                 </li>
    //               ))}
    //             </ul>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div class="wrapper">
      <div class="top-nav">
        <div className="App-top-nav">
          <NaviBar></NaviBar>
        </div>
      </div>
      <div class="left-menu">
        <div className="App-left-Menu">
          <ul>
            <li>shlasdgf</li>
            <li>shlasdgf</li>
            <li>shlasdgf</li>
            <li>shlasdgf</li>

            <li>shlasdgf</li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="App-data-colors" >
          <ul>
            {Object.entries(colors).map(([colorName, shades]) => (
              <li key={colorName}>
                <strong>{colorName}</strong>
                <ul>
                  {shades.map((shade, index) => (
                    <li
                      key={index}
                      style={{ backgroundColor: shade }}
                      onClick={() => handleCopyToClipboard(shade)}
                    >
                      <span>{shade}</span>
                      <button onClick={() => handleCopyToClipboard(shade)}>
                        Copy
                      </button>
                      {copiedText === shade && (
                        <span
                          className="copied"
                          style={{ marginLeft: "0.5rem", color: "green" }}
                        >
                          Copied!
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
