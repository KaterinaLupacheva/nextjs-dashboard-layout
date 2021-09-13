import { SidebarContainer } from "./Sidebar.styled";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItem from "../MenuItem";

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      {MENU_ITEMS.map((item) => (
        <MenuItem menuItem={item} key={item.id} />
      ))}
    </SidebarContainer>
  );
}
