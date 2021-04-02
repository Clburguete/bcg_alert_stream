import React from "react";
import { MdClose, MdError, MdLightbulbOutline } from "react-icons/md";

import { useModal } from "@hooks";
import { Modal, ModalContent } from "@components";
import { Blocking } from "./Blocking";

import * as S from "./style";

const getCorrectedSeverity = (severity, predictionConfidence) => {
  return Math.floor(severity * (predictionConfidence / 100));
}

const Alert = props => {
  const {
    alert: {
      title,
      key,
      isPrediction,
      severity,
      predictionConfidence
    },
    deleteAlert,
    solvedBlocking,
    setAsSolved
  } = props;

  const { isOpen, toggleModal } = useModal();

  const correctedSeverity = isPrediction ? getCorrectedSeverity(severity, predictionConfidence) : severity;
  const mappedAlert = {
    ...props.alert,
    severity: correctedSeverity
  };
  const warningIcon = isPrediction ?
    <MdLightbulbOutline/> :
    <MdError/>;
  
  const isBlocking = correctedSeverity === 5;

  return !!deleteAlert && isBlocking ? (
    <Blocking
      {...mappedAlert}
      alertKey={key}
      setAsSolved={setAsSolved}
      solvedBlocking={solvedBlocking}
    />
  ):(
    <>
      <S.Wrapper
        {...mappedAlert}
        onClick={toggleModal}
      >
        <S.WarningIcon isPrediction={isPrediction}>
          {warningIcon}
        </S.WarningIcon>
        <S.Title>{title}</S.Title>
        {
          !!deleteAlert && (correctedSeverity < 3  || isPrediction) && (
          <S.CloseIcon onClick={() => deleteAlert(key)}>
            <MdClose/>
          </S.CloseIcon>
          )
        }
      </S.Wrapper>
      <Modal isOpen={isOpen} close={toggleModal}>
        <ModalContent {...mappedAlert}/>
      </Modal>
    </>
  )
}

export { Alert }