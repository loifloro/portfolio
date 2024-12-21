"use client";

import { createPortal } from "react-dom";
import { Credits, SocialLinks } from "../Footer";
import { isEqual } from "lodash";
import { navigationBarItems } from "datasets/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "@phosphor-icons/react";
import GradientLine from "../GradientLine";
import Link from "next/link";
import Logo from "../Logo";

type MobileNavigationProps = {
    isOpened: boolean;
    handleClick: () => void;
};

export default function MobileMenu({
    isOpened,
    handleClick,
}: MobileNavigationProps) {
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <></>;
    }

    return createPortal(
        <div
            className={`lg:hidden fixed bg-pale-white z-[999] w-full transition-transform ease-in-out duration-100  ${isOpened ? "-translate-y-0" : "-translate-y-full delay-300"}`}
        >
            <div
                className={`flex flex-col justify-between px-8 py-6 min-h-screen transition-opacity ease-in-out duration-300 ${isOpened ? "opacity-100 delay-300" : "opacity-0"}`}
            >
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="min-w-32">
                            <Logo />
                        </div>
                        <button
                            onClick={handleClick}
                            className="flex gap-1 items-center uppercase font-mono tracking-widest text-night font-light"
                        >
                            Close
                            <X weight="regular" size={25} />
                        </button>
                    </div>
                    <GradientLine type="space-between" />
                </div>
                <ul className="flex flex-col items-center gap-10 list-none">
                    {navigationBarItems.map(({ name, url, comingSoon }) => (
                        <li
                            key={url}
                            className={`relative uppercase font-semibold text-heading-2 leading-heading-2  tracking-[.3em] transition-colors ease-in-out duration-300 hover:text-rich-black ${isEqual(pathname, url) ? "text-rich-black" : "text-battleship-gray"}`}
                        >
                            <Link
                                href={url}
                                onClick={handleClick}
                                className={`inline-block ${comingSoon && "pointer-events-none text-battleship-gray before:w-[calc(100%+20px)] before:h-[.6px] before:bg-battleship-gray before:relative before:block before:right-3 before:top-8"}`}
                            >
                                {name}
                            </Link>
                            {comingSoon && (
                                <span className="min-w-max absolute float-right font-mono font-thin text-xs tracking-widest">
                                    Coming Soon!
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col items-center gap-5">
                    <SocialLinks />
                    <Credits />
                </div>
            </div>
        </div>,
        document.body
    );
}
