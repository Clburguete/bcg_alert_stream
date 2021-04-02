import styled from "styled-components";

const Wrapper = styled.div`
  ${p => p.theme.shared.alert};
  background-color: #c00b0b;
  color: white;
`;

const Title = styled.h6``;

export {
  Wrapper,
  Title
}