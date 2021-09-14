import React from "react";
import {
  Dashboard,
  ShoppingCart,
  People,
  AttachMoney,
} from "@styled-icons/material";

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: "/",
    id: 0,
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    url: "/page2",
    id: 1,
  },
  {
    name: "Customers",
    icon: People,
    url: "/page3",
    id: 2,
  },
  {
    name: "Inventory",
    icon: AttachMoney,
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
