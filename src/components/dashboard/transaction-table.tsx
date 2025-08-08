"use client";

import { Transaction } from "@/types/transaction";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import Indicator from "../shared/indicator";
import Table from "../shared/table";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/utils/functions";
import OutlineButton from "../shared/buttons/outline-button";

const columns: ColumnDef<Transaction>[] = [
  {
    id: "date",
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "remark",
    accessorKey: "remark",
    header: "Remark",
  },
  {
    id: "amount",
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
    id: "currency",
    accessorKey: "currency",
    header: "Currency",
  },
  {
    id: "type",
    accessorKey: "type",
    header: "Type",
    cell: (info) => {
      const type = info.getValue<"Credit" | "Debit">();
      return <Indicator status={type} />;
    },
  },
];

function TransactionTable() {
  const { data, error, isLoading, mutate } = useSWR<Transaction[]>(
    "/api/transactions/all",
    fetcher
  );

  if (isLoading) {
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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-semibold text-error mb-4">
          Something went wrong 😬
        </h2>
        <p className="mb-6 text-dark-green max-w-md text-center">
          {error.message}
        </p>
        <OutlineButton onClick={() => mutate()}>Try again</OutlineButton>
      </div>
    );
  }

  if (data) return <Table data={data} columns={columns} />;
}

export default TransactionTable;
