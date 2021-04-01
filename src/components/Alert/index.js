import React from "react";

import { Blocking } from "./Blocking";
import { HighPriority } from "./HighPriority";
import { MediumPriority } from "./MediumPriority";
import { LowPriority } from "./LowPriority";

const getCorrectedSeverity = (severity, predictionConfidence) => {
  return Math.floor(severity * (predictionConfidence / 100));
}

const getPriorityLevel = alert => {
  const { severity, isPrediction, predictionConfidence } = alert;
  const correctedSeverity = isPrediction ? getCorrectedSeverity(severity, predictionConfidence) : severity;
  let PriorityAlert;

  switch(correctedSeverity) {
    case 3:
      PriorityAlert = MediumPriority;
      break;
    case 4:
      PriorityAlert = HighPriority;
      break;
    case 5:
      PriorityAlert = Blocking;
      break
    default:
      PriorityAlert = LowPriority;
      break;
  }

  return PriorityAlert;
}

const Alert = props => {
  const PriorityAlert = getPriorityLevel(props)


  return (
    <PriorityAlert {...props}/>
  )
}

export { Alert }