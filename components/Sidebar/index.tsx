import { SidebarContainer } from "./Sidebar.styled";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItem from "../MenuItem";
import { useRouter } from "next/router";

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  const router = useRouter();
  return (
    <SidebarContainer isOpened={isOpened}>
      {MENU_ITEMS.map((item) => (
        <MenuItem
          menuItem={item}
          key={item.id}
          selected={router.asPath === item.url}
        />
      ))}
    </SidebarContainer>
  );
}
