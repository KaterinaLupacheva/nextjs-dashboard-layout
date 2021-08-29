import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: #d8dcd6;
  width: ${(props) => (props.isOpened ? "240px" : "0px")};
  transition: width 0.7s;
  overflow: hidden;
`;
