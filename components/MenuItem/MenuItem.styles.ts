import styled from "styled-components";

export const MenuItemContainer = styled.a`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px 20px;
  align-items: center;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #00022e;
    color: #fc86aa;
  }

  &.selected {
    background-color: #00022e;
    color: white;
    opacity: 0.5;
  }
`;
