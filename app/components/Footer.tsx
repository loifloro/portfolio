import Container from "./container/Container";
import GradientLine from "./GradientLine";
import Heading from "./display/Heading";
import React from "react";
import Subtitle from "./display/Subtitle";

export function Credits() {
    return (
        <p className="font-mono uppercase text-sm text-battleship-gray">
            Lois Floro
        </p>
    );
}

export function Footer() {
    return (
        <footer id="get-in-touch" className="mt-44">
            <Container withDivider dividerType="centered" dividerPosition="top">
                <div className="mt-24 mb-6">
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
                    <GradientLine type="space-between" />
                    <div className="flex justify-between mt-6">
                        <p className="font-mono uppercase text-sm text-battleship-gray">
                            All Rights Reserved - {new Date().getUTCFullYear()}
                        </p>
                        <Credits />
                    </div>
                </div>
            </Container>
        </footer>
    );
}
