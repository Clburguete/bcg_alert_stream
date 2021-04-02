import React from "react";
import { MdError } from "react-icons/md";

import { useModal } from "@hooks";
import { Modal, ModalContent } from "@components";

import * as S from "./style";

const Blocking = props => {
  const {
    title,
    setAsSolved,
    solvedBlocking,
    alertKey
  } = props;

  const isSolved = solvedBlocking.includes(alertKey)

  const { isOpen, toggleModal } = useModal(!isSolved);

  const solveAlert = () => {
    setAsSolved(alertKey)
    toggleModal()
  }

  return (
    <>
      <S.Wrapper onClick={toggleModal}>
          <MdError/>
          <S.Title>{title}</S.Title>
      </S.Wrapper>
      <Modal isOpen={isOpen} close={isSolved ? toggleModal : null}>
        <ModalContent {...props}/>
        {
          !isSolved &&
          <S.Btn onClick={solveAlert}>
            Solved it
          </S.Btn>}
      </Modal>
    </>
  )
};

export { Blocking }