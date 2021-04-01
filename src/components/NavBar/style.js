import styled from "styled-components";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  background: ${p => p.theme.colors.main};
  color: ${p => p.theme.colors.secondary};
`

export {
  Wrapper
}