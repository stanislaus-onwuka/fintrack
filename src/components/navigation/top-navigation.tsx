"use client";

import Image from "next/image";
import React from "react";
import Avatar from "../shared/avatar";
import { useAppContext } from "@/context/AppContext";

function TopNavigation() {
  const { toggleSidebar } = useAppContext();

  return (
    <div className="flex justify-between items-center py-4 px-[4%] fixed top-0 left-0 right-0 w-full z-10 bg-base-white shadow-md shadow-gray-200 lg:shadow-none md:px-12">
      <div className="flex items-center gap-[28px]">
        <button
          className="cursor-pointer block lg:hidden"
          onClick={toggleSidebar}
        >
          <Image
            src="/assets/icons/menu.svg"
            width={24}
            height={24}
            alt="Menu"
          />
        </button>
        <button className="cursor-pointer hidden lg:block">
          <Image
            src="/assets/icons/menu.svg"
            width={24}
            height={24}
            alt="Menu"
          />
        </button>
        <Image
          src="/assets/icons/logo.svg"
          width={112}
          height={32}
          alt="FinTrack"
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logomark.svg"
          width={32}
          height={32}
          alt="FinTrack"
          className="block md:hidden"
        />
      </div>
      <div className="flex gap-7 items-center">
        <button className="hidden cursor-pointer md:block">
          <Image
            src="/assets/icons/search.svg"
            width={24}
            height={24}
            alt="Search"
          />
        </button>
        <button className="hidden cursor-pointer md:block">
          <Image
            src="/assets/icons/app-grid.svg"
            width={24}
            height={24}
            alt="Grid"
          />
        </button>
        <button>
          <Avatar
            name="User"
            imgUrl="/assets/images/user-avi.png"
            className="max-w-[40px]"
            isUserAvatar
          />
        </button>
      </div>
    </div>
  );
}

export default TopNavigation;
