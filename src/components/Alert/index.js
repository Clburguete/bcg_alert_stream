import React from "react";
import { MdClose, MdError, MdLightbulbOutline } from "react-icons/md";

import { useModal } from "@hooks";
import { Modal, ModalContent } from "@components";
import { Blocking } from "./Blocking";

import * as S from "./style";

const Alert = props => {
  const {
    alert: {
      title,
      key,
      isPrediction,
      severity
    },
    deleteAlert,
    solvedBlocking,
    setAsSolved
  } = props;

  const { isOpen, toggleModal } = useModal();

  const warningIcon = isPrediction ?
    <MdLightbulbOutline/> :
    <MdError/>;
  
  const isBlocking = severity === 5;

  return !!deleteAlert && isBlocking ? (
    <Blocking
      {...props.alert}
      alertKey={key}
      setAsSolved={setAsSolved}
      solvedBlocking={solvedBlocking}
    />
  ):(
    <>
      <S.Wrapper
        {...props.alert}
        onClick={toggleModal}
      >
        <S.WarningIcon isPrediction={isPrediction}>
          {warningIcon}
        </S.WarningIcon>
        <S.Title>{title}</S.Title>
        {
          !!deleteAlert && (severity < 3  || isPrediction) && (
          <S.CloseIcon onClick={() => deleteAlert(key)}>
            <MdClose/>
          </S.CloseIcon>
          )
        }
      </S.Wrapper>
      <Modal isOpen={isOpen} close={toggleModal}>
        <ModalContent {...props.alert}/>
      </Modal>
    </>
  )
}

export { Alert }