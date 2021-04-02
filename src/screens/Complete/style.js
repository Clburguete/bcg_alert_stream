import styled from "styled-components";

const SearchWrapper = styled.div`
  position: fixed;
  bottom: 150px;
  left: 0;
  right: 0;
  background: white;
  z-index: 9;
  box-shadow: 0 -6px 15px 5px rgb(0 0 0 / 45%);

  ${p => p.theme.breakpoints.landscape} {
    top: 0;
    bottom: unset;
    left: 200px;
  }
`;

const List = styled.div`
  padding: 20px;
  padding-bottom: 80px;
  overflow-y: scroll;

  ${p => p.theme.breakpoints.landscape} {
    padding-top: 100px
  }
`;

export {
  SearchWrapper,
  List
}