import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
    return (
        <Link
            href="/"
            className="text-base text-rich-black flex items-center gap-1 uppercase font-medium tracking-widest font-mono"
        >
            <Image
                src="/svg/logo-black.svg"
                className="block dark:hidden"
                width={50}
                height={26}
                alt="Lois Logo"
            />
            <Image
                src="/svg/logo-white.svg"
                className="hidden dark:block"
                width={50}
                height={26}
                alt="Lois Logo"
            />
        </Link>
    );
}
