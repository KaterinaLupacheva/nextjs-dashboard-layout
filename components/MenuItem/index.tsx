import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem as MenuItemType } from "../../constants/menu-items";
import { MenuItemContainer } from "./MenuItem.styles";

type MenuItemProps = {
  menuItem: MenuItemType;
};

export default function MenuItem({
  menuItem: { name, icon: Icon, url },
}: MenuItemProps) {
  const router = useRouter();
  const selected = router.asPath === url;
  return (
    <>
      <Link href={url} passHref>
        <MenuItemContainer className={selected ? "selected" : ""}>
          <Icon />
          <span>{name}</span>
        </MenuItemContainer>
      </Link>
    </>
  );
}
