import ArrowLink from "./button/ArrowLink";
import Container from "./container/Container";
import GradientLine from "./GradientLine";
import React from "react";
import Subtitle from "./display/Subtitle";

export default function Footer() {
    return (
        <footer id="get-in-touch" className="mt-32">
            <Container withDivider dividerType="centered" dividerPosition="top">
                <div className="mt-24 mb-6">
                    <Subtitle name="Get in Touch" />
                    <h3 className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[20px] text-rich-black mb-24">
                        Compelled To Collaborate?
                    </h3>
                    <div className="mb-24">
                        <p className="font-mono uppercase text-raisin-black">
                            Send a Mail Here:
                        </p>
                        <h3 className="uppercase text-heading-3 tracking-widest text-rich-black">
                            jloisfloro@gmail.com
                        </h3>
                    </div>
                    <div className="flex gap-4 mb-5 text-rich-black">
                        <ArrowLink name="linkedin" url="" />
                        <ArrowLink name="dribble" url="" />
                        <ArrowLink name="instagram" url="" />
                        <ArrowLink name="github" url="" />
                    </div>
                    <GradientLine type="space-between" />
                    <div className="flex justify-between mt-6 text-raisin-black">
                        <p className="font-mono uppercase text-sm">
                            All Rights Reserved - {new Date().getUTCFullYear()}
                        </p>
                        <p className="font-mono uppercase text-sm">
                            Created by Lois Floro
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
