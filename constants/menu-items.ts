import React from "react";
import {
  Dashboard,
  ShoppingCart,
  People,
  AttachMoney,
  AddShoppingCart,
  Done,
  Business,
  HomeWork,
  Person,
} from "@styled-icons/material";

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: "/",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    url: "/orders",
    subItems: [
      {
        name: "New",
        icon: AddShoppingCart,
        url: "/page20",
      },
      {
        name: "Completed",
        icon: Done,
        url: "/page21",
      },
    ],
  },
  {
    name: "Customers",
    icon: People,
    url: "/page3",
    subItems: [
      {
        name: "Corporate",
        icon: Business,
        url: "/page3",
      },
      {
        name: "SMB",
        icon: HomeWork,
        url: "/page3",
        subItems: [
          {
            name: "Retail",
            icon: Person,
            url: "/page3",
          },
        ],
      },
    ],
  },
  {
    name: "Inventory",
    icon: AttachMoney,
    url: "/page4",
  },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function createMenu(menuOptions: MenuOption[]) {
  const makeMenuLevel = (options: MenuOption[], depth = 0): MenuItem[] => {
    return options.map((option, idx) => {
      return {
        ...option,
        id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
        depth,
        subItems:
          option.subItems && option.subItems.length > 0
            ? makeMenuLevel(option.subItems, depth + 1)
            : undefined,
      };
    });
  };

  return makeMenuLevel(menuOptions);
}

export const MENU_ITEMS: MenuItem[] = createMenu(MENU_OPTIONS);
