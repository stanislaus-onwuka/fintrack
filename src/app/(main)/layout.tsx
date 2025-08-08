import Sidebar from "@/components/navigation/sidebar";
import TopNavigation from "@/components/navigation/top-navigation";
import React, { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-base-white">
      <TopNavigation />
      <div className="flex gap-12 pt-8">
        <Sidebar />
        <div className="w-full ml-0 mt-[45px] px-[4%] flex-1 overflow-y-auto pt-7 h-[calc(100vh-5rem)] md:px-12 lg:ml-[320px] lg:mt-[72px] lg:h-[calc(100vh-6.5rem)]"> 
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
