import { classNames } from "@/utils/functions";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  name: string;
  imgUrl: string;
  className?: string;
  isUserAvatar?: boolean;
}

function Avatar({ name, imgUrl, className = "", isUserAvatar = false }: AvatarProps) {
  return (
    <div className={classNames("rounded-full", className)}>
      <Image
        alt={name}
        src={imgUrl}
        width={isUserAvatar ? 40 : 32}
        height={isUserAvatar ? 40 : 32}
        className="rounded-full"
      />
    </div>
  );
}

export default Avatar;
