import Link from "next/link";
import React from "react";

export default function Logo() {
    return (
        <Link
            href="/"
            className="text-base text-rich-black flex items-center gap-1 uppercase font-medium tracking-widest font-mono"
        >
            <span>Lois</span>
        </Link>
    );
}
