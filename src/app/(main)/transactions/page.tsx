import TransactionTable from "@/components/dashboard/transaction-table";
import React from "react";

function Transactions() {
  return (
    <div>
      <h1 className="font-bold text-[34px] leading-10 -tracking-[2%] text-dark-green">
        Transactions
      </h1>
      <div>
        <TransactionTable />
      </div>
    </div>
  );
}

export default Transactions;
