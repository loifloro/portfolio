import { Footer } from "./_components/Footer";
import Header from "@/components/menu/Header";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lois Floro | Frontend Developer & Designer",
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
