"use client"

import { Transaction } from "@/types/transaction";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import Indicator from "../shared/indicator";
import Table from "../shared/table";
import { transactions } from "@/data/transactions";
import Image from "next/image";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: (info) => new Date(info.getValue<string>()).toLocaleDateString(),
  },
  {
    accessorKey: "remark",
    header: "Remark",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (info) => {
      const value = info.getValue<number>();
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => {
      const type = info.getValue<"Credit" | "Debit">();
      return <Indicator status={type} />;
    },
  },
];

function TransactionTable() {
  const [data, setData] = useState<Transaction[] | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(transactions);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!data) {
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
  }

  return <Table data={data} columns={columns} />;
}

export default TransactionTable;
