import React, { useEffect, useRef, useState } from "react";


import { Routes } from "@routes";
import { AlertProvider } from "@contexts";
import { THEME, ThemeProvider, GlobalStyle } from "./style";
import { createAlertStream } from "./utils";

// you may decrease this if you're feeling brave!
const INTERVAL_DURATION = 2000;

export default function App() {
  const [items, setItems] = useState([]);
  const [clearedItems, setClearedItems] = useState([]);
  const [solvedBlocking, setSolvedBlocking] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  const markAsCleared = alertID => setClearedItems([...clearedItems, alertID]);
  const setAsSolved = alertID => setSolvedBlocking([...solvedBlocking, alertID]);
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
      <GlobalStyle/>
      <AlertProvider value={{
          items,
          clearedItems,
          markAsCleared,
          solvedBlocking,
          setAsSolved
        }
      }>
          <Routes/>
      </AlertProvider>
    </ThemeProvider>
  );
}
