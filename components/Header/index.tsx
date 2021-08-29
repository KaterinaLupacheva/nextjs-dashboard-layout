import { MdMenu, MdChevronLeft } from "react-icons/md";
import {
  HeaderContainer,
  IconContainer,
  TitleContainer,
} from "./Header.styles";

type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <MdChevronLeft /> : <MdMenu />}
      </IconContainer>
      <TitleContainer>Header</TitleContainer>
    </HeaderContainer>
  );
}
