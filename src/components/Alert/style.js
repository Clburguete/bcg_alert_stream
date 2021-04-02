import styled from "styled-components";

const getColors = (isPrediction, color) => {
  const textColor = isPrediction ? `color: ${color}` : `color: #edf0f1`;
  const bgColor = isPrediction ? `background-color: white` : `background-color: ${color}`;
  return `
    ${textColor};
    ${bgColor}
  `;
}

const WarningIcon = styled.span`
  grid-area: warning;
  font-size: 32px;
  color: inherit;
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
    const severity = p.severity < 3 ? "default": p.severity;
    return`
          ${getColors(p.isPrediction, p.theme.colors.severity[severity])}
        `
  }};
`;

const Title = styled.h5`
  font-size: 24px;
`;



export {
  WarningIcon,
  CloseIcon,
  Wrapper,
  Title
}