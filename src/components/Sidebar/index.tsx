"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const generateChapters = (
  start: number,
  end: number,
): { label: string; route: string }[] => {
  if (start > end) {
    return [];
  }
  return [
    { label: `Capitulo ${start}`, route: `/daniel/${start}` },
    ...generateChapters(start + 1, end),
  ];
};

const danielChapters = [
  {
    label: "Home",
    route: "/daniel",
  },
  ...generateChapters(1, 12),
];

const menuGroups = [
  {
    menuItems: [
      {
        icon: (
          <Image
            width={26}
            height={32}
            src={"/assets/svg/book.svg"}
            alt="Logo"
            priority
          />
        ),
        label: "Daniel",
        route: "#",
        children: danielChapters,
      },
      {
        icon: (
          <Image
            width={26}
            height={32}
            src={"/assets/svg/book.svg"}
            alt="Logo"
            priority
          />
        ),
        label: "Apocalipsis",
        route: "#",
        children: [
          { label: "Home", route: "/apocalipsis" },
          { label: "Cartas", route: "/apocalipsis/1" },
          { label: "Sellos", route: "/apocalipsis/2" },
          { label: "Trompetas", route: "/apocalipsis/3" },
          { label: "Mujer y dragon", route: "/apocalipsis/4" },
          { label: "Copas", route: "/apocalipsis/5" },
          { label: "Gran ramera", route: "/apocalipsis/6" },
          { label: "Triunfo final", route: "/apocalipsis/7" },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-full w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5">
          <Link href="/">
            <p className="content-end text-4xl font-semibold text-white">
              Profecia
            </p>
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="px-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
