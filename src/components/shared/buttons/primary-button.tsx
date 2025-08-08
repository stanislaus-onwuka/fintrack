import { classNames } from "@/utils/functions";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function PrimaryButton({ children, className="", ...others }: PrimaryButtonProps) {
  return (
    <button
      className={classNames(
        "py-2 px-[18px] text-[#020303] text-[15px] leading-5 bg-light-green-400 border border-light-green-400 font-medium rounded-2xl cursor-pointer duration-100 hover:bg-base-white",
        className
      )}
      {...others}
    >
      {" "}
      {children}
    </button>
  );
}

export default PrimaryButton;
