"use client";

import React from "react";
import SummaryCard from "./summary-card";
import { useSearchParams } from "next/navigation";
import { DashboardSummary, DashboardTabs } from "@/types/dashboard";
import TransactionTable from "./transaction-table";
import useSWR from "swr";
import { fetcher } from "@/utils/functions";
import OutlineButton from "../shared/buttons/outline-button";

function DashboardTabView() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") ?? DashboardTabs.OVERVIEW;

  const { data, error, isLoading, mutate } = useSWR<DashboardSummary>(
    "/api/transactions/summary",
    fetcher
  );

  const renderSummaryCards = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col gap-[18px] py-3 w-full">
          <h3 className="text-dark-green font-bold text-xl leading-6 -tracking-[2%]">
            Summary
          </h3>
          <div className="grid responsive-summary-grid w-full gap-[28px]">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="block h-[159px] bg-light-green rounded-[20px] animate-pulse"></div>
            ))}
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="mb-6 text-dark-green max-w-md text-center">
            {error.message}
          </p>
          <OutlineButton className="py-2 px-[18px]" onClick={() => mutate()}>Try again</OutlineButton>
        </div>
      );
    }

    if (data) {
      if (activeTab === DashboardTabs.OVERVIEW) {
        const {
          totalBalance,
          totalCredits,
          totalDebits,
          transactionCount,
          transactionChange,
          balanceChange,
          debitsChange,
          creditsChange,
        } = data;

        return (
          <div className="flex flex-col gap-[18px] py-3 w-full">
            <h3 className="text-dark-green font-bold text-xl leading-6 -tracking-[2%]">
              Summary
            </h3>
            <div className="grid responsive-summary-grid w-full gap-[28px]">
              <SummaryCard
                title="Total Balance"
                amount={totalBalance}
                change={balanceChange}
                currency="USD"
              />
              <SummaryCard
                title="Total Credits"
                amount={totalCredits}
                change={creditsChange}
                currency="USD"
              />
              <SummaryCard
                title="Total Debits"
                amount={totalDebits}
                change={debitsChange}
                currency="USD"
              />
              <SummaryCard
                title="Transactions"
                amount={transactionCount}
                change={transactionChange}
                currency="USD"
              />
            </div>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div>
      {renderSummaryCards()}
      <div>
        <TransactionTable />
      </div>
    </div>
  );
}

export default DashboardTabView;
