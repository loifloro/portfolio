import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--rich-black)",
                "pale-white": "var(--pale-white)",
                "anti-flash-white": "var(--anti-flash-white)",
                "battleship-gray": "var(--battleship-gray)",
                "raisin-black": "var(--raisin-black)",
                "rich-black": "var(--rich-black)",
            },
            backgroundImage: {
                "gradient-centered": "var(--gradient-centered)",
                "gradient-space-between": "var(--gradient-space-between)",
                "gradient-horizontal": "var(--gradient-horizontal)",
                "gradient-to-right": "var(--gradient-to-right)",
                "gradient-to-left": "var(--gradient-to-left)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-space-mono)"],
                inter: ["var(--font-inter)"],
            },
            fontSize: {
                "heading-1": "var(--heading-1)",
                "heading-2": "var(--heading-2)",
                "heading-3": "var(--heading-3)",
                "heading-4": "var(--heading-4)",
                "text-xs": "var(--text-xs)",
                "text-sm": "var(--text-sm)",
                "text-base": "var(--text-base)",
            },
            lineHeight: {
                base: "var(--text-base)",
                "heading-1": "var(--line-height-heading-1)",
                "heading-2": "var(--line-height-heading-2)",
                "heading-3": "var(--line-height-heading-3)",
                "heading-4": "var(--line-height-heading-4)",
            },
        },
    },
    plugins: [],
} satisfies Config;
