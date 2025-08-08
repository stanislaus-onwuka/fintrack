"use client";

import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { Transaction } from "@/types/transaction";
import Image from "next/image";
import { classNames } from "@/utils/functions";
import { useAppContext } from "@/context/AppContext";

interface TableProps {
  data: Transaction[];
  columns: ColumnDef<Transaction>[];
}

export default function Table({ data, columns }: TableProps) {
  const { tableSearch, hideTableSearch } = useAppContext();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="py-7">
      {tableSearch ? (
        <div className="flex items-center gap-4">
          <input
            placeholder="Filter transactions..."
            className="p-2 ml-4 mb-3 border-b-[2px] border-table-border"
            value={
              (table.getColumn("remark")?.getFilterValue() as string) ?? ""
            }
            onChange={(e) =>
              table.getColumn("remark")?.setFilterValue(e.target.value)
            }
          />
          <button className="hidden text-[16px] p-1 h-fit cursor-pointer md:block" onClick={hideTableSearch}>X</button>
        </div>
      ) : null}

      <div className="overflow-x-auto min-h-[350px]">
        <table className="min-w-full border-separate border-spacing-x-[18px] table-auto text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={() => {
                      header.column.getToggleSortingHandler();
                      header.column.toggleSorting(
                        header.column.getIsSorted() === "asc"
                      );
                    }}
                    className="text-[13px] font-medium leading-4 text-table-header !py-1 cursor-pointer border-b-[1.5px] border-table-border w-fit first:w-full"
                  >
                    <div className="flex items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <button>
                        <Image
                          src="/assets/icons/caret-down.svg"
                          width={24}
                          height={24}
                          alt="Caret"
                          className={classNames(
                            "duration-75",
                            header.column.getIsSorted() === "asc"
                              ? "rotate-180"
                              : "rotate-0"
                          )}
                        />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {data.length === 0 || table.getRowModel().rows.length === 0 ? (
              <tr className="h-[350px]">
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="!py-[18px] border-t-[1.5px] border-table-border text-dark-green whitespace-nowrap text-[15px] leading-5 tracking-[-0.5%] w-fit first:w-full"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
