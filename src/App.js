import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";


import { Routes } from "@routes";
import { AlertProvider } from "@contexts";
import { THEME, ThemeProvider } from "./style";
import { createAlertStream } from "./utils";

// you may decrease this if you're feeling brave!
const INTERVAL_DURATION = 2000;

const DebugNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
`;

export default function App() {
  const [items, setItems] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  // clear the alert stream
  function handleClearTapped() {
    setItems([]);
  }

  // start the alert stream
  function handleStartTapped() {
    if (!interval.current) {
      setIsRunning(true);
      interval.current = createAlertStream({
        onNewAlert: setItems,
        intervalDuration: INTERVAL_DURATION
      });
    }
  }

  // stop the alert stream
  function handleStopTapped() {
    if (interval.current) {
      interval.current();
      interval.current = null;
      setIsRunning(false);
    }
  }

  // start the alert stream on mount
  useEffect(() => {
    if (!interval.current) {
      interval.current = createAlertStream({
        onNewAlert: setItems,
        intervalDuration: INTERVAL_DURATION
      });
      setIsRunning(true);
    }
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <AlertProvider value={items}>
        <div className="App">
          <br />
          <DebugNav>
            <button disabled={isRunning} onClick={handleStartTapped}>
              start
            </button>
            <button disabled={!isRunning} onClick={handleStopTapped}>
              stop
            </button>
            <button disabled={!items.length} onClick={handleClearTapped}>
              clear
            </button>
          </DebugNav>
          <Routes/>
        </div>
      </AlertProvider>
    </ThemeProvider>
  );
}
