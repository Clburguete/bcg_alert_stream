import React from "react";
import { MdHistory, MdHome, MdFilterList } from "react-icons/md";

import { Link } from "./Link";
import * as S from "./style";

const NavBar = () => (
  <S.Wrapper>
    <Link
      linkTo={"/home"}
      icon={<MdHome/>}
    />
    <Link
      linkTo={"/complete-log"}
      icon={<MdHistory/>}
    />
    <Link
      linkTo={"/filter"}
      icon={<MdFilterList/>}
    />
  </S.Wrapper>
);

export { NavBar }