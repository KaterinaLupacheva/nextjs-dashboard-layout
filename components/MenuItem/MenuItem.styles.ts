import styled from "styled-components";

export const MenuItemContainer = styled.a<{ depth: number }>`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px 0px 10px 10px;
  align-items: center;
  justify-content: space-between;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.secondary};
    opacity: 0.5;
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.textLight};
  }
`;
