import DashboardTabView from "@/components/dashboard/tab-view";
import AvatarList from "@/components/shared/avatar-list";
import OutlineButton from "@/components/shared/buttons/outline-button";
import PrimaryButton from "@/components/shared/buttons/primary-button";
import Indicator from "@/components/shared/indicator";
import Tabs from "@/components/shared/tabs";
import { characterList, dashboardTabs } from "@/data/dashboard";
import Image from "next/image";
import React, { Suspense } from "react";

function Dashboard() {
  return (
    <main>
      <section>
        <div>
          <div className="flex flex-col justify-between items-start gap-6 md:items-center md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex items-center-safe">
                <h1 className="font-bold text-2xl leading-10 -tracking-[2%] text-dark-green md:text-[34px]">
                  Wallet Ledger
                </h1>
                <button>
                  <Image
                    src="/assets/icons/header-caret-down.svg"
                    width={24}
                    height={24}
                    alt="Caret down"
                  />
                </button>
              </div>
              <Indicator status="active" />
            </div>
            <div className="flex items-center gap-3">
              <PrimaryButton>Share</PrimaryButton>
              <OutlineButton className="size-9 flex items-center justify-center">
                <Image
                  width={24}
                  height={24}
                  src="/assets/icons/option.svg"
                  alt="Options"
                />
              </OutlineButton>
            </div>
          </div>
          <div className="py-7">
            <AvatarList list={characterList} max={4} />
          </div>
        </div>
        <div className="pb-7">
          <Tabs tabOptions={dashboardTabs} />
        </div>
      </section>
      <section>
        <Suspense fallback={<Loader />}>
          <DashboardTabView />
        </Suspense>
      </section>
    </main>
  );
}

const Loader = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <Image
        src="/assets/icons/loader.svg"
        width={52}
        height={52}
        alt="Loader"
        className="animate-spin"
      />
    </div>
  );
};

export default Dashboard;
