import "./globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
import { GeistSans } from "geist/font/sans";
import { Inter, Space_Mono, Space_Grotesk } from "next/font/google";
import ProgressBarProvider from "utils/providers/ProgressBarProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lois Floro | Frontend Developer & Designer",
    description:
        "Lois is passionate in converting designs into real life applications with care and commitment.",
    openGraph: {
        title: "Lois Floro | Frontend Developer & Designer",
        description:
            "Lois is passionate in converting designs into real life applications with care and commitment.",
    },
};

const space_mono = Space_Mono({
    subsets: ["latin"],
    variable: "--font-space-mono",
    display: "swap",
    weight: ["400", "700"],
});

const space_grotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
    weight: ["300"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["300"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.className} ${space_mono.variable} ${space_grotesk.variable} ${inter.variable}`}
        >
            <body className="relative" id="app">
                <ProgressBarProvider>{children}</ProgressBarProvider>
            </body>
        </html>
    );
}
