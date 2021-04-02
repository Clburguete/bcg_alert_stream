import React from "react";
import { MdClose, MdError, MdLightbulbOutline } from "react-icons/md";

import { Blocking } from "./Blocking";

import * as S from "./style";

const getCorrectedSeverity = (severity, predictionConfidence) => {
  return Math.floor(severity * (predictionConfidence / 100));
}

const Alert = props => {
  const { isPrediction, severity, predictionConfidence } = props;
  const correctedSeverity = isPrediction ? getCorrectedSeverity(severity, predictionConfidence) : severity;
  const mappedAlert = {
    ...props,
    severity: correctedSeverity
  };
  const warningIcon = isPrediction ?
    <MdLightbulbOutline/> :
    <MdError/>;
  
  const isBlocking = correctedSeverity === 5;

  return (
    <S.Wrapper
      {...mappedAlert}
    >
      <S.WarningIcon isPrediction={isPrediction}>
        {warningIcon}
      </S.WarningIcon>
      <S.Title>{props.title}</S.Title>
      {
        (isPrediction) && (
        <S.CloseIcon>
          <MdClose/>
        </S.CloseIcon>
        )
      }
    </S.Wrapper>
  )
}

export { Alert }