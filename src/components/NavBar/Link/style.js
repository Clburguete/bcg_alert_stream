import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
      text-decoration: none;
  }

  &.--active {
    span {
      display: block;
    }
  }
`;

const BtnText = styled.span`
  font-size: 20px;
`;

const ActiveMarker = styled.span`
  display: none;
  position: absolute;
  top: -14px;
  width: 8px;
  height: 8px;
  background-color: #9dd3ee;
  border-radius: 50%;
`;

export {
  Button,
  BtnText,
  ActiveMarker
}