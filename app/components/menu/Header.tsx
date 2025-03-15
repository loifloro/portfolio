import { navigationBarItems } from "datasets/navigation";
import ArrowLink from "../button/ArrowLink";
import GradientLine from "../GradientLine";
import Link from "next/link";
import Logo from "../Logo";
import MobileNavigation from "./MobileNavigation";

type HeaderItemProps = {
    name: string;
    isComingSoon?: boolean;
    url: string;
};

function HeaderItem({ name, isComingSoon = false, url }: HeaderItemProps) {
    return (
        <li className="text-sm uppercase font-light tracking-widest text-rich-black relative">
            <Link
                href={url}
                className={`inline-block ${isComingSoon && "pointer-events-none text-battleship-gray before:w-[calc(100%+20px)] before:h-[.6px] before:bg-battleship-gray before:relative before:block before:right-3 before:top-3"}`}
            >
                {name}
            </Link>
            {isComingSoon && (
                <span className="min-w-max absolute float-right font-mono font-thin text-xs bottom-4">
                    Coming Soon!
                </span>
            )}
        </li>
    );
}

export default function Header() {
    return (
        <header className="md:px-8 px-4 py-6 dark:mix-blend-difference top-0 absolute w-full">
            <nav className="flex items-center justify-between mb-4">
                <div className="min-w-32">
                    <Logo />
                </div>
                <ul className="lg:flex hidden gap-16">
                    {navigationBarItems.map(({ name, comingSoon, url }) => (
                        <HeaderItem
                            key={url}
                            name={name}
                            isComingSoon={comingSoon}
                            url={url}
                        />
                    ))}
                </ul>
                <ArrowLink
                    className="lg:flex hidden"
                    name="Get in Touch"
                    url="#get-in-touch"
                />
                <MobileNavigation />
            </nav>
            <GradientLine type="centered" onMobile="space-between" />
        </header>
    );
}
