import React from "react";

import * as S from "./style";

const Layout = ({ children }) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
);

export {
  Layout
}