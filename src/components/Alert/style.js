import styled from "styled-components";

const WarningIcon = styled.span`
  grid-area: warning;
  font-size: 32px;
  color: ${p => p.isPrediction ? "rgba(0,0,0,0.4)" : "inherit"};
`;

const CloseIcon = styled.span`
  text-align: right;
  font-size: 24px;
  grid-area: close;
  cursor: pointer;
`;

const Wrapper = styled.div`
  ${p => p.theme.shared.alert};
  ${p => {
    switch(p.severity) {
      case 3:
        return `
          background-color: yellow;
        `
      case 4:
        return `
          color: indianred;
        `;
      case 5:
        return `
          background-color: #c00b0b;
          color: white;
        `;
      default:
        return `
          color: darkgreen;
        `;
    }
  }};
`;

const Title = styled.h6``;

export {
  WarningIcon,
  CloseIcon,
  Wrapper,
  Title
}