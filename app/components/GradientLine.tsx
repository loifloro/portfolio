import { gradientLineType } from "types";
import React from "react";

type GradientLineProps = {
    type: gradientLineType;
    onMobile?: gradientLineType;
};

export default function GradientLine({ type, onMobile }: GradientLineProps) {
    const _type = {
        centered: "lg:bg-gradient-centered",
        "space-between": "lg:bg-gradient-space-between",
        "to-right": "lg:bg-gradient-to-right",
        "to-left": "lg:bg-gradient-to-left",
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
