import styled from "styled-components";

const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  color: ${p => p.theme.colors.secondary};
  box-shadow: 0 -6px 15px 5px rgba(0, 0, 0, 0.45);
  background: linear-gradient(-45deg, rgba(0,0,0,0.05), rgba(255,255,255,0.25));
  background: ${p => p.theme.colors.main};


  ${p => p.theme.breakpoints.landscape} {
    top: 0;
    right: unset;
    width: 200px;
    height: unset;
    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  }
`

export {
  Wrapper
}