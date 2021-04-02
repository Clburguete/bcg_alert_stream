import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(512px);
  max-height: 474px;
  min-height: 344px;
  padding: 38px 74px 42px;
  z-index: 2;
  background-color: white;
  box-shadow: 0px 4px 34px #C4C0CA;
  border-radius: 8px 8px 0px 0px;
`

export {
  Background,
  Wrapper
}