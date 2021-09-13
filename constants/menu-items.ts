import React from "react";
import {
  MdDashboard,
  MdShoppingCart,
  MdPeople,
  MdAttachMoney,
} from "react-icons/md";

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    url: "/",
    id: 0,
  },
  {
    name: "Orders",
    icon: MdShoppingCart,
    url: "/page2",
    id: 1,
  },
  {
    name: "Customers",
    icon: MdPeople,
    url: "/page3",
    id: 2,
  },
  {
    name: "Inventory",
    icon: MdAttachMoney,
    url: "/page4",
    id: 3,
  },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: number;
};
