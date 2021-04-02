import styled from "styled-components";

const Wrapper = styled.span`
  position: relative;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  max-height: 70px;
  width: calc(100vw - 100px);
  padding: 28px 50px;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 28px;
  top: 28px;
  z-index: 1;
`;

export {
  Wrapper,
  Input,
  Icon
}