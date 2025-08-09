import React from "react";

type TagProps = {
    name: string;
};

export default function Tag({ name }: TagProps) {
    return (
        <span className="uppercase font-inter text-rich-black font-light md:text-base text-sm leading-base tracking-wide border-solid border-rich-black border-[.5px] rounded-full px-2 py-[2px] max-w-fit text-nowrap">
            {name}
        </span>
    );
}
