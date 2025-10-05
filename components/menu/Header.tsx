"use client";

import { addToast } from "@heroui/react";
import {
    adminNavigationBarItems,
    portfolioNavigationBarItems,
} from "datasets/navigation";
import { createClient } from "utils/supabase/client";
import { isNull, isUndefined } from "lodash";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { SignOut } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ArrowLink from "../button/ArrowLink";
import clsx from "clsx";
import GradientLine from "../GradientLine";
import Link from "next/link";
import Logo from "../Logo";
import MobileNavigation from "./MobileNavigation";
import Image from "next/image";

type HeaderItemProps = {
    name: string;
    isComingSoon?: boolean;
    url: string;
};

function HeaderItem({ name, isComingSoon = false, url }: HeaderItemProps) {
    const pathname = usePathname();
    const isOnProtectedPage = pathname.includes("protected");

    return (
        <li>
            <Link
                href={url}
                className="text-sm uppercase font-light tracking-widest text-rich-black relative"
            >
                <span
                    className={`inline-block ${isOnProtectedPage && "text-battleship-gray"} ${isComingSoon && "pointer-events-none before:w-[calc(100%+20px)] before:h-[.6px] before:bg-battleship-gray before:relative before:block before:right-3 before:top-3"}`}
                >
                    {name}
                </span>
                {isComingSoon && (
                    <span className="min-w-max absolute float-right font-mono font-thin text-xs bottom-4">
                        Coming Soon!
                    </span>
                )}
            </Link>
        </li>
    );
}

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [isShown, setIsShown] = useState(true);

    const { scrollY } = useScroll();

    const isOnProtectedPage = pathname.includes("protected");

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

    const variants = {
        shown: {
            top: 0,
        },
        hidden: {
            top: -100,
            transition: { duration: 1 },
        },
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious();

        if (!isUndefined(prev) && prev > latest) {
            setIsShown(true);

            return;
        }

        if (latest < 100) {
            setIsShown(true);

            return;
        }

        setIsShown(false);
    });

    return (
        <motion.header
            className=" fixed w-full z-10"
            animate={isShown ? "shown" : "hidden"}
            variants={variants}
        >
            <nav>
                <ul
                    className={clsx(
                        "flex items-center justify-between md:px-8 px-4 py-6 ",
                        scrollY.get() > 100 &&
                            "bg-opacity-[0.002] backdrop-blur-sm"
                    )}
                >
                    <li className="grow min-w-32">
                        {!isOnProtectedPage && <Logo />}
                        {isOnProtectedPage && (
                            <Image
                                src="/svg/logo-black.svg"
                                className="block"
                                width={50}
                                height={26}
                                alt="Lois Logo"
                            />
                        )}
                    </li>
                    <li className="lg:block hidden grow gap-16">
                        <ul className="flex gap-16">
                            {!isOnProtectedPage &&
                                portfolioNavigationBarItems.map(
                                    ({ name, comingSoon, url }) => (
                                        <HeaderItem
                                            key={url}
                                            name={name}
                                            isComingSoon={comingSoon}
                                            url={url}
                                        />
                                    )
                                )}
                            {isOnProtectedPage &&
                                adminNavigationBarItems.map(({ name, url }) => (
                                    <HeaderItem
                                        key={url}
                                        name={name}
                                        url={url}
                                    />
                                ))}
                        </ul>
                    </li>
                    <li className="lg:flex hidden grow">
                        {!isOnProtectedPage && (
                            <ArrowLink
                                name="Get in Touch"
                                url="#get-in-touch"
                            />
                        )}
                        {isOnProtectedPage && (
                            <button
                                name="signout-btn"
                                onClick={handleSignout}
                                className="flex md:text-base text-sm items-center gap-1 uppercase font-light tracking-widest font-mono min-w-fit text-nowrap text-red-700"
                            >
                                Sign out
                                <SignOut size={22} />
                            </button>
                        )}
                    </li>
                    <li className="lg:hidden block">
                        <MobileNavigation />
                    </li>
                </ul>
            </nav>
            <GradientLine type="centered" onMobile="space-between" />
        </motion.header>
    );
}
