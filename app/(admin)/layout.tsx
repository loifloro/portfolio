import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Admin",
        default: "Portfolio",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <HeroUIProvider>
                <ToastProvider placement="top-center" toastOffset={10} />
                {children}
            </HeroUIProvider>
        </main>
    );
}
