import React from "react";
import { MdSearch } from "react-icons/md";

import * as S from "./style";

const SearchBar = (props) => {
  const {
    value,
    handleChange
  } = props;

  const _handleChange = (e) => {
    handleChange(e.target.value);
  }

  return (
    <S.Wrapper>
      <S.Icon>
        <MdSearch/>
      </S.Icon>
      <S.Input
        placeholder="Search by title"
        type="text"
        value={value}
        onChange={_handleChange}
      />
    </S.Wrapper>
  )
}

export {
  SearchBar
}