import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import Link from "next/link";
import React from "react";

type ArrowLinkProps = {
    name: string;
    isWithArrow?: boolean;
    className?: string;
    url: string;
} & Omit<React.ComponentProps<typeof Link>, "href">;

export default function ArrowLink({
    name,
    isWithArrow = true,
    className,
    url,
    ...props
}: ArrowLinkProps) {
    return (
        <Link
            href={url}
            className={`flex text-rich-black md:text-base text-sm items-center gap-1 uppercase font-light tracking-widest font-mono min-w-fit text-nowrap text- ${className && className}`}
            target={isAbsoluteUrl(url) ? "_blank" : "_self"}
            {...props}
        >
            <span>{name}</span> {isWithArrow && <ArrowUpRight size={22} />}
        </Link>
    );
}
