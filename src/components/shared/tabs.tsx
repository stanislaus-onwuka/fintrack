"use client"

import { TabsProps } from "@/types/shared/tabs";
import { classNames } from "@/utils/functions";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";


function Tabs({ tabOptions, defaultTab, queryName = "tab" }: TabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab =
    searchParams.get(queryName) || defaultTab || tabOptions[0].value;

  const setTab = useCallback(
    (tab: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(queryName, tab);
      router.replace(`?${params.toString()}`);
    },
    [router, searchParams, queryName]
  );

  return (
    <div className="border-b-[1.5px] border-table-border flex">
      {tabOptions.map((tab, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setTab(tab.value)}
            className={classNames(
              "py-3 px-7 text-table-header text-[15px] leading-5 duration-75 capitalize cursor-pointer border-b-2 border-b-transparent font-medium",
              currentTab === tab.value ? "!text-light-green-400  !border-b-light-green-400" : "hover:border-b-gray-200"
            )}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
