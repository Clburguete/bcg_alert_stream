import styled from "styled-components";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 150px;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: ${p => p.theme.colors.secondary};
  overflow-y: scroll;

  ${p => p.theme.breakpoints.landscape} {
    bottom: 0;
    left: 200px;
  }
`;

export { Wrapper };