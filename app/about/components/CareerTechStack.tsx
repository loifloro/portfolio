"use client";

import { Controller, Mousewheel } from "swiper/modules";
import { databases, frameworks, languages, tools } from "datasets/techStack";
import { IconType } from "@icons-pack/react-simple-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import type { Swiper as SwiperType } from "swiper";

type CareerTechStackLogoProps = {
    logo: IconType;
    name: string;
};

function CareerTechStackLogo({ name, logo }: CareerTechStackLogoProps) {
    const Tag = logo;

    return (
        <div className="flex flex-col gap-3 items-center sm:w-32 w-24">
            <Tag className="md:h-16 md:w-16 sm:h-14 sm:w-14 h-8 w-8" />
            <p className="font-mono uppercase md:text-sm text-xs text-center font-normal leading-heading-4 tracking-wider md:text-raisin-black text-battleship-gray">
                {name}
            </p>
        </div>
    );
}

export default function CareerTechStack() {
    const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
    const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);
    const tabs = [
        {
            id: 1,
            name: "Databases & ORMs",
            tab: databases,
        },
        {
            id: 2,
            name: "Languages",
            tab: languages,
        },
        {
            id: 3,
            name: "Frameworks & Libraries",
            tab: frameworks,
        },
        {
            id: 4,
            name: "Technologies & Tools",
            tab: tools,
        },
    ];

    return (
        <Container id="tech-stack" withDivider>
            <div className="text-center mb-24">
                <Subtitle size="sm">Tools Used</Subtitle>
                <Heading
                    element="h3"
                    className="uppercase text-heading-3 leading-heading-3 tracking-widest text-rich-black"
                >
                    Career Tech Stack
                </Heading>
            </div>
            <div className="flex flex-col items-center mb-32">
                <div
                    className="sm:w-2/3 w-full relative overflow-hidden before:absolute before:inline-block before:w-1/3 before:h-[50px] before:bg-gradient-to-r before:from-pale-white  before:to-transparent before:z-10
           after:absolute after:inline-block after:right-0 after:w-1/3 after:h-[50px] after:bg-gradient-to-l after:from-pale-white after:z-10 after:to-transparent after:top-0"
                >
                    <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={30}
                        mousewheel={true}
                        className="!w-full !h-full mr-30"
                        modules={[Mousewheel, Controller]}
                        onSwiper={(swiper) => setFirstSwiper(swiper)}
                        controller={{ control: secondSwiper }}
                        initialSlide={1}
                    >
                        {tabs.map(({ id, name }) => (
                            <SwiperSlide
                                key={id}
                                className={`flex items-start !w-min gap-9`}
                            >
                                {({ isActive }) => (
                                    <p
                                        className={`uppercase font-light text-center !w-max sm:text-heading-4 tracking-widest mt-3 cursor-grab ${isActive ? "text-rich-black" : "text-battleship-gray"}`}
                                    >
                                        {name}
                                    </p>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        mousewheel={true}
                        modules={[Controller, Mousewheel]}
                        onSwiper={(swiper) => setSecondSwiper(swiper)}
                        controller={{ control: firstSwiper }}
                        watchSlidesProgress
                    >
                        {tabs.map(({ id, tab }) => (
                            <SwiperSlide key={id}>
                                <div className="flex flex-wrap sm:gap-16 gap-x-2 gap-y-12 justify-center mt-32">
                                    {tab.map(({ id, name, logo }) => (
                                        <CareerTechStackLogo
                                            key={id}
                                            name={name}
                                            logo={logo}
                                        />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
}
