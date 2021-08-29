import { useState } from "react";
import { MdMenu, MdChevronLeft } from "react-icons/md";
import {
  HeaderContainer,
  IconContainer,
  TitleContainer,
} from "./Header.styles";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <HeaderContainer>
      <IconContainer onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? <MdChevronLeft /> : <MdMenu />}
      </IconContainer>
      <TitleContainer>Header</TitleContainer>
    </HeaderContainer>
  );
}
