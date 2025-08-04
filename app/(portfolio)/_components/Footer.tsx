import ArrowLink from "@/components/button/ArrowLink";
import Container from "@/components/container/Container";
import GradientLine from "@/components/GradientLine";
import Heading from "@/components/display/Heading";
import Image from "next/image";
import React from "react";
import Subtitle from "@/components/display/Subtitle";

export function Footer() {
    return (
        <footer id="get-in-touch" className="mt-44 relative z-0">
            <Container withDivider dividerType="centered" dividerPosition="top">
                <div className="mt-24 pb-6">
                    <Subtitle>Get in Touch</Subtitle>
                    <Heading
                        element="h2"
                        className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-heading-3 text-rich-black mb-24 md:max-w-[50%]"
                    >
                        Compelled To Collaborate?
                    </Heading>
                    <div className="mb-24">
                        <p className="font-mono uppercase text-raisin-black">
                            Send a Mail Here:
                        </p>
                        <h3 className="uppercase text-heading-3 tracking-widest text-rich-black">
                            jloisfloro@gmail.com
                        </h3>
                    </div>
                    <nav
                        aria-label="SOCIAL LINKS"
                        className="flex gap-5 sm:gap-8 my-6 sm:mt-9"
                    >
                        <ArrowLink
                            name="LinkedIn"
                            isWithArrow
                            url="https://www.linkedin.com/in/jlfloro/"
                        />
                        <ArrowLink
                            name="X / Twitter"
                            isWithArrow
                            url="https://x.com/lois_today"
                        />
                        <ArrowLink
                            name="Github"
                            isWithArrow
                            url="https://github.com/loifloro"
                        />
                    </nav>
                    <GradientLine type="space-between" />
                    <div className="flex flex-wrap justify-between mt-6">
                        <p className="font-mono uppercase text-sm text-battleship-gray">
                            All Rights Reserved - {new Date().getUTCFullYear()}
                        </p>
                        <p className="font-mono uppercase text-sm text-battleship-gray">
                            Lois Floro
                        </p>
                    </div>
                </div>
            </Container>
            <div className="hidden absolute min-h-full w-6/12 right-0 bottom-0 md:flex justify-end flex-col -z-10">
                <div className="absolute h-full w-full bg-gradient-footer-bg flex items-end"></div>
                <Image
                    fill
                    src="/png/footer-bg.png"
                    alt="Lois Floro"
                    style={{ objectFit: "cover" }}
                    className="dark:brightness-[.40] opacity-70 dark:opacity-100 contrast-[1.2] dark:contrast-[1.05]"
                />
            </div>
        </footer>
    );
}
