import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem as MenuItemType } from "../../constants/menu-items";
import { MenuItemContainer } from "./MenuItem.styles";

type MenuItemProps = {
  menuItem: MenuItemType;
};

export default function MenuItem({
  menuItem: { name, icon: Icon, url, depth },
}: MenuItemProps) {
  const router = useRouter();
  const selected = router.asPath === url;
  return (
    <MenuItemContainer className={selected ? "selected" : ""} depth={depth}>
      <Link href={url} passHref>
        <div className="menu-item">
          <Icon />
          <span>{name}</span>
        </div>
      </Link>
    </MenuItemContainer>
  );
}
