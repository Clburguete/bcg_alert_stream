import React from "react";
import { MdHistory, MdHome, MdFilterList } from "react-icons/md";

import { Link } from "./Link";
import * as S from "./style";

const NavBar = () => (
  <S.Wrapper>
    <Link
      linkTo={"/home"}
      text={"Home"}
      icon={<MdHome/>}
    />
    <Link
      linkTo={"/complete"}
      text={"Log"}
      icon={<MdHistory/>}
    />
    <Link
      linkTo={"/filter"}
      text={"Filter"}
      icon={<MdFilterList/>}
    />
  </S.Wrapper>
);

export { NavBar }