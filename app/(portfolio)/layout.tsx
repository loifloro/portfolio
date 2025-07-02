import { Footer } from "app/components/Footer";
import Header from "app/components/menu/Header";
import React from "react";

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
