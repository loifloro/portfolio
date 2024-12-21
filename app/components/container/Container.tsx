import { GradientDirection } from "types/components";
import { isEqual } from "lodash";
import GradientLine from "../GradientLine";
import React, { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    fullWidth?: boolean;
    withDivider?: boolean;
    dividerType?: GradientDirection;
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
