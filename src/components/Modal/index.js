import React from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";


import * as S from "./style";

const Modal = ({ children, isOpen, close }) => {
  
  return !!isOpen ? createPortal(
    <S.Background>
      <S.Wrapper>
        {!!close &&
          <MdClose
            onClick={close}
          />
        }
        {children}
      </S.Wrapper>
    </S.Background>,
    document.body
  ) : null;
};

export { Modal }