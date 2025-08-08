import Image from "next/image";
import React from "react";

interface SummaryCardProps {
  title: string;
  amount: number;
  currency: string;
  change: number;
}

function SummaryCard({ title, amount, change, currency }: SummaryCardProps) {
  return (
    <div className="bg-light-green rounded-[20px] !p-[28px] flex flex-col gap-[18px]">
      <div className="flex justify-between items-center">
        <h3 className="text-base !font-bold leading-6 -tracking-[0.5%] text-dark-green sm:text-[17px]">
          {" "}
          {title}
        </h3>
        <button className="cursor-pointer">
          <Image
            src="/assets/icons/option.svg"
            width={24}
            height={24}
            alt="option-icon"
          />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl text-dark-green tracking-[-2%] leading-10 font-bold sm:text-[36px]">
          {amount.toLocaleString("en-US", {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h2>
        <h6 className="text-light-green-100 text-[13px] leading-4">
          {` ${change > 0 ? "+" : ""} ${change}%`}
        </h6>
      </div>
    </div>
  );
}

export default SummaryCard;
