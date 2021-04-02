import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 100px;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(150px - 40px);
  color: ${p => p.theme.colors.text};
  box-shadow: 0 -6px 15px 5px rgba(0, 0, 0, 0.45);
  background: linear-gradient(-45deg, rgba(0,0,0,0.05), rgba(255,255,255,0.25));
  background: ${p => p.theme.colors.main};
  font-size: 40px;
  z-index: 1;


  ${p => p.theme.breakpoints.landscape} {
    flex-direction: column;
    row-gap: 100px;
    top: 0;
    right: unset;
    width: calc(200px - 40px);
    height: unset;
    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  }
`

export {
  Wrapper
}