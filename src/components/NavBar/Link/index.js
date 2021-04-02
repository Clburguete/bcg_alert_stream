import React from "react";

import * as S from "./style";

const Link = ({ linkTo, icon }) => {

  return (
    <S.Button activeClassName={"--active"} to={linkTo}>
      {icon}
      <S.ActiveMarker/>
    </S.Button>
  )
}

export {
  Link
}