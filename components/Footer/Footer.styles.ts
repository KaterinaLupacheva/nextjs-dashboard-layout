import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  background: ${props => props.theme.colors.main};
  height: 50px;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.secondary};
`;
