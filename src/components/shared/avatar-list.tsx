import { AvatarListProps } from "@/types/shared/avatar";
import React from "react";
import Avatar from "./avatar";

function AvatarList({ list, max = 4 }: AvatarListProps) {
  const numberOfNamesShown = max - 1

  return (
    <div className="flex gap-3 items-center">
      <div className="flex flex-row-reverse relative pl-4">
        {list.slice(0, max).map((character, idx) => (
          <Avatar
            key={idx}
            name={character.name}
            imgUrl={character.imgUrl}
            className={`border-[2.5px] border-base-white -ml-4 relative z-[${10 - idx}]`}
          />
        ))}
      </div>
      <h4 className="text-sm leading-5 -tracking-[0.5%] text-table-header sm:text-[15px]">
        <span >
          {list.slice(0, numberOfNamesShown).map(character => character.name).join(", ")}
        </span>
        {"  "}
        <span>
          {`+${list.length-numberOfNamesShown} others`}
        </span>
      </h4>
    </div>
  );
}

export default AvatarList;
