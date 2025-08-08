import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
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

