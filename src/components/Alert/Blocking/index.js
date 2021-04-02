import React from "react";

import { useModal } from "@hooks";
import { Modal } from "@components";

import * as S from "./style";

const Blocking = props => (
  <>
  <S.Wrapper>
      <S.Title>{props.title}</S.Title>
      {props.children}
  </S.Wrapper>
  {/* <Modal isOpen={true}>
    <S.Wrapper>
      <S.Title>{props.title}</S.Title>
    </S.Wrapper>
  </Modal> */}
  </>
);

export { Blocking }