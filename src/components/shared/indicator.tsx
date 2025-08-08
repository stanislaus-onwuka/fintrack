import { classNames } from "@/utils/functions";
import React from "react";

interface IndicatorProps {
  status: string;
}

enum statuses {
  ACTIVE = "active",
  CREDIT = "credit",
  DEBIT = "debit",
}

function Indicator({ status }: IndicatorProps) {
  const getStatusColor = () => {
    const statusLowerCase = status.toLowerCase();

    if (
      statusLowerCase === statuses.ACTIVE ||
      statusLowerCase === statuses.CREDIT
    ) {
      return "bg-success";
    }

    return "bg-error";
  };

  return (
    <div className="!px-2 !py-1 rounded-2xl bg-light-green flex gap-2 items-center">
      <div
        className={classNames("size-1.5 block rounded-full", getStatusColor())}
      ></div>
      <span className="text-xs font-medium leading-5 text-dark-green capitalize sm:text-[15px]">
        {status}
      </span>
    </div>
  );
}

export default Indicator;
