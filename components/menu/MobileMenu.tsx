"use client";

import { createPortal } from "react-dom";
import { isEqual, isNull } from "lodash";
import { navigationBarItems } from "datasets/navigation";
import { useEffect, useRef } from "react";
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
    const pathname = usePathname();
    const targetRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        targetRef.current = document.body;

        targetRef.current.style.overflow = isOpened ? "hidden" : "auto";
    }, [isOpened]);

    if (isNull(targetRef.current)) {
        return null;
    }

    return createPortal(
        <aside
            className={`lg:hidden fixed top-0 bg-pale-white z-[999] w-full min-h-lvh origin-top transition-transform ease-in-out duration-100 ${isOpened ? "-translate-y-0 top-0" : "-translate-y-full delay-300"}`}
        >
            <div
                className={`flex flex-col justify-between md:px-8 px-4 py-6 min-h-lvh transition-opacity ease-in-out duration-300 ${isOpened ? "opacity-100 delay-300" : "opacity-0"}`}
            >
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="min-w-32">
                            <Logo />
                        </div>
                        <button
                            onClick={handleClick}
                            className="flex gap-1 items-center uppercase font-mono tracking-widest text-rich-black font-light"
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
                            className={`relative uppercase font-semibold text-heading-2 leading-heading-2 tracking-heading-3 ml-[var(--spacing-heading-3)] transition-colors ease-in-out duration-300 hover:text-rich-black ${isEqual(pathname, url) ? "text-rich-black" : "text-battleship-gray"}`}
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
                    <p className="font-mono uppercase text-sm text-battleship-gray">
                     Lois Floro
                    </p>>
                </div>
            </div>
        </aside>,
        targetRef.current
    );
}
