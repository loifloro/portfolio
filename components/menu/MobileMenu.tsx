"use client";

import { addToast } from "@heroui/react";
import { createClient } from "utils/supabase/client";
import { createPortal } from "react-dom";
import { isEqual, isNull } from "lodash";
import {
    adminNavigationBarItems,
    portfolioNavigationBarItems,
} from "datasets/navigation";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SignOut, X } from "@phosphor-icons/react";
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
    const router = useRouter();

    const targetRef = useRef<HTMLElement | null>(null);

    const supabase = createClient();

    const handleSignout = async () => {
        const { error } = await supabase.auth.signOut({ scope: "local" });

        if (!isNull(error)) {
            addToast({
                title: "Failed to log out",
                description: error.message,
                color: "danger",
            });

            return;
        }

        addToast({
            title: "Successfully logged out",
            description: "Please log in again to continue.",
            color: "success",
        });

        router.push("/login");
    };

    useEffect(() => {
        targetRef.current = document.body;

        targetRef.current.style.overflow = isOpened ? "hidden" : "auto";
    }, [isOpened]);

    if (isNull(targetRef.current)) {
        return null;
    }

    return createPortal(
        <aside
            className={`lg:hidden fixed top-0 bg-pale-white z-[999] w-full min-h-svh origin-top transition-transform ease-in-out duration-100 ${isOpened ? "-translate-y-0 top-0" : "-translate-y-full delay-300"}`}
        >
            <div
                className={`flex flex-col justify-between md:px-8 px-4 py-6 min-h-svh transition-opacity ease-in-out duration-300 ${isOpened ? "opacity-100 delay-300" : "opacity-0"}`}
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
                    {!pathname.includes("protected") &&
                        portfolioNavigationBarItems.map(
                            ({ name, url, comingSoon }) => (
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
                            )
                        )}
                    {pathname.includes("protected") && (
                        <>
                            {adminNavigationBarItems.map(({ name, url }) => (
                                <li
                                    key={url}
                                    className={`relative uppercase font-semibold text-heading-2 leading-heading-2 tracking-heading-3 ml-[var(--spacing-heading-3)] transition-colors ease-in-out duration-300 hover:text-rich-black ${isEqual(pathname, url) ? "text-rich-black" : "text-battleship-gray"}`}
                                >
                                    <Link
                                        href={url}
                                        onClick={handleClick}
                                        className="inline-block"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
                <div
                    className={`flex flex-row items-center gap-5 ${pathname.includes("protected") ? "justify-between" : "justify-center"}`}
                >
                    <p className="font-mono uppercase text-sm text-battleship-gray">
                        Lois Floro
                    </p>
                    {pathname.includes("protected") && (
                        <button
                            name="signout-btn"
                            onClick={handleSignout}
                            className="flex md:text-base text-sm items-center gap-1 uppercase font-light tracking-widest font-mono min-w-fit text-nowrap text-red-700"
                        >
                            Sign out
                            <SignOut size={22} />
                        </button>
                    )}
                </div>
            </div>
        </aside>,
        targetRef.current
    );
}
