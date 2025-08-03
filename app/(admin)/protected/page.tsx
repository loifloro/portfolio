import Blogs from "./_components/Blogs";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function Page() {
    return (
        <main>
            <Container aria-label="welcome-message" className="px-32 my-40">
                <Heading
                    element="h1"
                    className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[.25em]"
                >
                    Hi Lois,
                </Heading>
                <p className="text-battleship-gray font-light text-pretty">
                    Convert designs into real life applications with care and
                    commitment.
                </p>
            </Container>
            <Blogs />
        </main>
    );
}
