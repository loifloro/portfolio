import { isEqual } from "lodash";
import React from "react";

type SubtitleProps = {
    name: string;
    size?: "sm" | "md";
};

export default function Subtitle({ name, size = "md" }: SubtitleProps) {
    return (
        <span
            className={`${isEqual(size, "sm") && "text-sm"} font-light font-mono uppercase tracking-wider text-raisin-black mb-2`}
        >
            {name}
        </span>
    );
}
