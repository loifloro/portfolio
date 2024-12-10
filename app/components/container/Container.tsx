import React, { ReactNode } from "react";
import GradientLine from "../GradientLine";
import { gradientLineType } from "types";
import { isEqual } from "lodash";

type ContainerProps = {
    children: ReactNode;
    fullWidth?: boolean;
    withDivider?: boolean;
    dividerType?: gradientLineType;
    dividerPosition?: "top" | "bottom";
};

export default function Container({
    children,
    fullWidth = false,
    withDivider = false,
    dividerType = "space-between",
    dividerPosition = "bottom",
}: ContainerProps) {
    return (
        //  TODO
        <section className={`${fullWidth ? "w-full" : "px-8"}`}>
            {withDivider && isEqual(dividerPosition, "top") && (
                <GradientLine type={dividerType} />
            )}
            {children}
            {withDivider && isEqual(dividerPosition, "bottom") && (
                <GradientLine type={dividerType} />
            )}
        </section>
    );
}
