import { MenuItem as MenuItemType } from "../../constants/menu-items";
import MenuItem from "../MenuItem";

type MenuItemsListProps = {
  options: MenuItemType[];
};

export default function MenuItemsList({ options }: MenuItemsListProps) {
  return (
    <>
      {options.map((option) => (
        <div key={option.id}>
          <MenuItem menuItem={option} />
          {option.subItems && option.subItems?.length > 0 ? (
            <MenuItemsList options={option.subItems} />
          ) : null}
        </div>
      ))}
    </>
  );
}
