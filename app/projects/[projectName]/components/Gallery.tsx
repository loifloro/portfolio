"use client";

import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

export default function Gallery() {
    // const [activeImg, setActiveImg] = useState<string>("");

    return (
        <Container withDivider dividerType="space-between">
            <Subtitle name="Project Shots" size="sm" />
            <Heading
                element="h2"
                className="text-heading-3 leading-heading-3 font-sans font-light tracking-widest text-rich-black mb-12"
            >
                The Gallery
            </Heading>
            <div className="flex flex-col gap-2">
                <div className="relative h-[80vh]">
                    <Image
                        alt=""
                        src="/png/project-current-img-placeholder.png"
                        fill
                    />
                </div>
                <div className="flex justify-between">
                    <button className="font-mono text-lg uppercase">
                        View Design Comparison
                    </button>
                    <div className="flex gap-3">
                        <ArrowLeft size={36} weight="thin" />
                        <ArrowRight size={36} weight="thin" />
                    </div>
                </div>
                <div className="flex h-1/5 gap-4">
                    <div className="relative h-40 w-full">
                        <Image
                            alt=""
                            src="/png/project-img-placeholder.png"
                            fill
                        />
                    </div>
                    <div className="relative h-40 w-full">
                        <Image
                            alt=""
                            src="/png/project-img-placeholder.png"
                            fill
                        />
                    </div>
                    <div className="relative h-40 w-full">
                        <Image
                            alt=""
                            src="/png/project-img-placeholder.png"
                            fill
                        />
                    </div>
                    <div className="relative h-40 w-full">
                        <Image
                            alt=""
                            src="/png/project-img-placeholder.png"
                            fill
                        />
                    </div>
                    <div className="relative h-40 w-full">
                        <Image
                            alt=""
                            src="/png/project-img-placeholder.png"
                            fill
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}
