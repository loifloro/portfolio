import ArrowLink from "@/components/button/ArrowLink";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import GradientLine from "@/components/GradientLine";
import Image from "next/image";
import React from "react";

export default function Description() {
    return (
        <Container>
            <div className="min-h-screen grid md:grid-cols-2 items-center py-4 my-4">
                <div className="flex flex-col min-h-full justify-evenly xl:max-w-[90%] md:mx-0 mx-auto items-center md:items-start">
                    <div className="flex flex-col items-center md:items-start self-end md:text-left text-center">
                        <Image
                            src="/jpg/about-img-mobile.jpeg"
                            alt="Lois Floro"
                            width={100}
                            height={100}
                            draggable
                            className="md:hidden drop-shadow-xl mb-10 rounded-full"
                        />
                        <Subtitle>About Lois</Subtitle>
                        <Heading
                            element="h1"
                            className="uppercase text-heading-3 leading-heading-3 font-normal tracking-heading-3 text-rich-black mb-2"
                        >
                            A Frontend Enthusiast
                        </Heading>
                        <p className="text-battleship-gray">
                            Lois is a frontend enthusiast through and through,
                            he finds designing or converting designs very
                            rewarding. To create something with visual modality
                            is what he enjoy the most.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-5 sm:gap-8 sm:mt-12">
                        <ArrowLink
                            name="View Tech Stack"
                            isWithArrow
                            url="#tech-stack"
                        />
                    </div>
                </div>
                <div className="hidden md:flex justify-end xl:justify-center gap-4">
                    {/* <div className="grid grid-cols-2 grid-rows-2 gap-8"> */}
                    {/* <Image
                            src="/jpg/about-img-1.jpg"
                            alt="Lois Floro"
                            width={200}
                            height={200}
                            draggable
                            // className="relative right-6 drop-shadow-xl"
                        /> */}
                    <Image
                        src="/jpg/about-img-2.jpg"
                        alt="Lois Floro"
                        width={320}
                        height={320}
                        className="hidden xl:block"
                        // className="relative bottom-6 drop-shadow-xl"
                        draggable
                    />
                    {/* <Image
                            src="/jpg/about-img-3.jpg"
                            alt="Lois Floro"
                            width={200}
                            height={200}
                            draggable
                            // className="relative right-6 top-3 drop-shadow-xl"
                        /> */}
                    <Image
                        src="/jpg/about-img-4.jpg"
                        alt="Lois Floro"
                        width={320}
                        height={320}
                        draggable
                        // className="relative right-12 bottom-12 drop-shadow-xl"
                    />
                    {/* </div> */}
                </div>
            </div>
            <GradientLine type="space-between" />
        </Container>
    );
}
