import React from "react";
import * as S from "./style";

const ModalContent = props => {
  const {
    severity,
    type,
    time,
    title,
    description,
    isPrediction,
    predictionConfidence
  } = props;

  return (
    <S.Wrapper severity={severity}>
      <S.Type>{type}</S.Type>
      <S.AlertDate>{time.toString()}</S.AlertDate>
      {
        isPrediction && (
          <i>
            This is a prediction with a <b>{predictionConfidence}</b>% confidence rate.
          </i>
        )
      }
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
};

export {
  ModalContent
}