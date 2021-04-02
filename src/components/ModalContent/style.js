import styled from "styled-components";

const Title = styled.h5`
  font-size: 24px;
`;

const Wrapper = styled.section`
  ${Title} {
    width: fit-content;
    padding-bottom: 2px;
    border-bottom: 2px solid ${p => p.theme.colors.severity[p.severity] || p.theme.colors.severity.default};
  }
`;

const Description = styled.p``;

const Type = styled.h6`
  text-transform: uppercase;
`;

const AlertDate = styled.h6``;

export {
  Wrapper,
  Title,
  Description,
  Type,
  AlertDate
}