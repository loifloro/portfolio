import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

type ArrowLinkProps = {
    name: string;
    isWithArrow?: boolean;
    className?: string;
    url: URL | string;
};

export default function ArrowLink({
    name,
    isWithArrow = true,
    className,
    url,
}: ArrowLinkProps) {
    return (
        <Link
            href={url}
            className={`flex text-rich-black items-center gap-1 uppercase font-light tracking-widest font-mono min-w-fit ${className && className}`}
        >
            <span>{name}</span> {isWithArrow && <ArrowUpRight size={22} />}
        </Link>
    );
}
