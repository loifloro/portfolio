import "./globals.css";
import { Footer } from "./components/Footer";
import { GeistSans } from "geist/font/sans";
import { Inter, Space_Mono } from "next/font/google";
import Header from "./components/menu/Header";
import ProgressBarProvider from "utils/providers/ProgressBarProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lois Floro | Portfolio",
    description:
        "Lois a passionate in converting designs into real life applications with care and commitment.",
    openGraph: {
        title: "Lois Floro | Portfolio",
        description:
            "Lois a passionate in converting designs into real life applications with care and commitment.",
    },
};

const space_mono = Space_Mono({
    subsets: ["latin"],
    variable: "--font-space-mono",
    display: "swap",
    weight: ["400", "700"],
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
            className={`${GeistSans.variable} ${space_mono.variable} ${inter.variable}`}
        >
            <body className="relative">
                <ProgressBarProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ProgressBarProvider>
            </body>
        </html>
    );
}
