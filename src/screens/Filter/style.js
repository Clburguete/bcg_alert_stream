import styled from "styled-components";

const FilterWrapper = styled.div`
  position: fixed;
  bottom: 150px;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  height: 200px;
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
  padding-bottom: 200px;
  overflow-y: scroll;

  ${p => p.theme.breakpoints.landscape} {
    padding-top: 260px;
  }
`;

const FieldLabel = styled.span`
  display: block;
  padding: 8px;
  text-transform: uppercase;
  font-weight: bold;
`;

const FieldWrapper = styled.span`
  display: block;
  padding: 4px
`;

export {
  FilterWrapper,
  FieldLabel,
  FieldWrapper,
  List
}