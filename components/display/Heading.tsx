import React, { HTMLProps } from "react";

type HeadingProps = {
    element: "h1" | "h2" | "h3" | "h4";
    className?: HTMLProps<HTMLElement>["className"];
    children: React.ReactNode;
};
export default function Heading({
    element,
    className,
    children,
    ...props
}: HeadingProps & HTMLProps<HTMLHeadingElement>) {
    const _styles = `uppercase ${className}`;
    const HeadingTag = element;

    return (
        <HeadingTag className={_styles} {...props}>
            {children}
        </HeadingTag>
    );
}
