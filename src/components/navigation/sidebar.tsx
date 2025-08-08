"use client";

import { useAppContext } from "@/context/AppContext";
import { navLinks } from "@/data/navigation";
import { classNames } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();
  const { showSidebar } = useAppContext();

  return (
    <aside
      className={classNames(
        "max-w-60 w-full h-full fixed top-[72px] left-0 z-10 pl-[2%] pr-[2%] bg-base-white duration-150 shadow-md shadow-gray-200 lg:shadow-none lg:pl-12 lg:pr-0 sm:max-w-[320px]",
        showSidebar ? "left-0" : "left-[-2000px]"
      )}
    >
      <nav className="flex flex-col">
        {navLinks.map((navLink, idx) => {
          const isActive = pathname === navLink.link;

          return (
            <Link
              href={navLink.link}
              key={idx}
              className={classNames(
                "py-2 px-[18px] font-medium text-[15px] leading-5 duration-75 text-left",
                isActive
                  ? "rounded-2xl bg-light-green-200 text-light-green-300"
                  : "text-dark-green rounded-2xl hover:bg-gray-100"
              )}
            >
              {navLink.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
