import styled from "styled-components";

const Wrapper = styled.div`
  ${p => p.theme.shared.alert};
  background-color: #c00b0b;
  color: white;
  font-size: 32px;
`;

const Title = styled.h5`
  font-size: 24px;
`;

const Btn = styled.button`
  padding: 10px;
  width: 120px;
  margin: auto;
  background: none;
  border: 2px solid #c00b0b;
  border-radius: 8px;
  color: #c00b0b;
  outline: none;
  text-transform: uppercase;
  font-weight: bold;
`;

export {
  Wrapper,
  Title,
  Btn
}