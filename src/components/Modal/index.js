import React from "react";
import { createPortal } from "react-dom";

import * as S from "./style";

const Modal = ({ children, isOpen, close }) => {
  
  return !!isOpen ? createPortal(
    <S.Background>
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </S.Background>,
    document.body
  ) : null;
};

export { Modal }