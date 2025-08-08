import { classNames } from '@/utils/functions'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function OutlineButton({ children, className="", ...others }:OutlineButtonProps) {
  return (
    <button
      className={
        classNames(
          "bg-base-white border-[1.5px] border-table-border font-medium rounded-2xl cursor-pointer duration-100 hover:border-black",
          className
        )
      }
      {...others}
    >
      {children} 
    </button>
  )
}

export default OutlineButton