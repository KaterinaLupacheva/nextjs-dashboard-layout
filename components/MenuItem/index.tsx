import Link from "next/link";
import { MenuItem as MenuItemType } from "../../constants/menu-items";
import { MenuItemContainer } from "./MenuItem.styles";

type MenuItemProps = {
  menuItem: MenuItemType;
  selected: boolean;
};

export default function MenuItem({
  menuItem: { name, icon: Icon, url },
  selected,
}: MenuItemProps) {
  return (
    <Link href={url} passHref>
      <MenuItemContainer className={selected ? "selected" : ""}>
        <Icon />
        <span>{name}</span>
      </MenuItemContainer>
    </Link>
  );
}
