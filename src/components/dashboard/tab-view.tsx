"use client";

import React from "react";
import SummaryCard from "./summary-card";
import { dashboardSampleData } from "@/data/dashboard";
import { useSearchParams } from "next/navigation";
import { DashboardTabs } from "@/types/dashboard";
import TransactionTable from "./transaction-table";

function DashboardTabView() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") ?? DashboardTabs.OVERVIEW;

  const {
    totalBalance,
    totalCredits,
    totalDebits,
    transactionCount,
    transactionChange,
    balanceChange,
    debitsChange,
    creditsChange,
  } = dashboardSampleData;

  const renderSummaryCards = () => {
    if (activeTab === DashboardTabs.OVERVIEW) {
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
