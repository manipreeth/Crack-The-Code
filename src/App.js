import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

import Rules from "./Components/Rules";
import Game from "./Components/crackTheCode";

export default function App() {
  const [gameInterface, handleGameInterface] = useState(true);

  const clicked = () => {
    handleGameInterface(false);
  };
  return (
    <div className="App">
      {gameInterface ? (
        <div id="rulesDisplay">
          <Rules />
          <Button variant="success" onClick={clicked}>
            I'm ready to break the code
          </Button>
        </div>
      ) : (
        <Game />
      )}
    </div>
  );
}
