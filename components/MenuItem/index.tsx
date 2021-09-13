import Link from "next/link";
import { MenuItem as MenuItemType } from "../../constants/menu-items";
import { MenuItemContainer } from "./MenuItem.styles";

type MenuItemProps = {
  menuItem: MenuItemType;
};

export default function MenuItem({
  menuItem: { name, icon: Icon, url },
}: MenuItemProps) {
  return (
    <Link href={url} passHref>
      <MenuItemContainer>
        <Icon />
        <div>{name}</div>
      </MenuItemContainer>
    </Link>
  );
}
