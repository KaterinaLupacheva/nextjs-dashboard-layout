import styled from "styled-components";

export const MenuItemContainer = styled.a<{ depth: number }>`
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
    opacity: 0.5;
    cursor: pointer;
  }

  .menu-item {
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: #00022e;
    color: white;
  }
`;
