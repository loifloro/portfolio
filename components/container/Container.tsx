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
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Container({
    children,
    fullWidth = false,
    withDivider = false,
    dividerType = "space-between",
    dividerPosition = "bottom",
    ...props
}: ContainerProps) {
    return (
        <section
            className={`${fullWidth ? "w-full" : "px-4 md:px-8"}`}
            {...props}
        >
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
