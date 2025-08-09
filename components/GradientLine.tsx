import { GradientDirection } from "types/components";
import React from "react";

type GradientLineProps = {
    type: GradientDirection;
    onMobile?: GradientDirection;
};

export default function GradientLine({ type, onMobile }: GradientLineProps) {
    const _type = {
        centered: "md:bg-gradient-centered",
        "space-between": "md:bg-gradient-space-between",
        "to-right": "md:bg-gradient-to-right",
        "to-left": "md:bg-gradient-to-left",
    };
    const _onMobile = {
        centered: "bg-gradient-centered",
        "space-between": "bg-gradient-space-between",
        "to-right": "bg-gradient-to-right",
        "to-left": "bg-gradient-to-left",
    };

    return (
        <div
            className={`w-full h-[0.8px] ${_type[type]} ${_onMobile[onMobile ?? type]}`}
        ></div>
    );
}
