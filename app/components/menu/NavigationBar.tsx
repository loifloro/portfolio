import ArrowLink from "../button/ArrowLink";
import GradientLine from "../GradientLine";
import Link from "next/link";
import Logo from "../Logo";
import MobileMenu from "./MobileMenu";

type NavigationBarItemProps = {
    name: string;
    isComingSoon?: boolean;
    url: string;
};

function NavigationBarItem({
    name,
    isComingSoon = false,
    url,
}: NavigationBarItemProps) {
    return (
        <li className="text-sm uppercase font-light tracking-widest text-night relative">
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

export default function NavigationBar() {
    const navigationBarItems = [
        {
            name: "Home",
            comingSoon: false,
            url: "/",
        },
        {
            name: "Projects",
            comingSoon: false,
            url: "/projects",
        },
        {
            name: "About",
            comingSoon: false,
            url: "/about",
        },
        {
            name: "Blog",
            comingSoon: true,
            url: "/blog",
        },
    ];

    return (
        <header className="px-8 py-6 dark:mix-blend-difference top-0 absolute w-full">
            <nav className="flex justify-between mb-4">
                <div className="min-w-32">
                    <Logo />
                </div>
                <ul className="lg:flex hidden gap-16">
                    {navigationBarItems.map(({ name, comingSoon, url }) => (
                        <NavigationBarItem
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
                    url=""
                />
                <MobileMenu />
            </nav>
            <GradientLine type="centered" onMobile="space-between" />
        </header>
    );
}
