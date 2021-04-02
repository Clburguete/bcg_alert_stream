import { ALERT_TYPES } from "./constants";

const Chance = require("chance");

let chance = new Chance();


const createNewAlert = () => {
  return {
    key: chance.guid(),
    title: chance.sentence({ words: 5 }),
    severity: chance.integer({ min: 1, max: 5 }),
    type: chance.pickone(ALERT_TYPES),
    isPrediction: chance.pickone([true, false]),
    predictionConfidence: chance.integer({ min: 70, max: 99 }),
    description: chance.paragraph({ sentences: 2 }),
    time: new Date()
  };
};

const getCorrectedSeverity = (severity, predictionConfidence) => {
  return Math.floor(severity * (predictionConfidence / 100));
}

// create a new alert stream
const createAlertStream = ({ onNewAlert, intervalDuration }) => {
  const interval = setInterval(() => {
    const newItem = createNewAlert();
    const correctedSeverity = getCorrectedSeverity(newItem.severity, newItem.predictionConfidence);
    const mappedItem = { ...newItem, severity: newItem.isPrediction ? correctedSeverity : newItem.severity}
    if (onNewAlert && typeof onNewAlert === "function") {
      onNewAlert((items) => [...items, mappedItem]);
    }
  }, intervalDuration);
  return () => clearInterval(interval);
};



export {
  createAlertStream
}