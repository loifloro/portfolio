"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Image from "next/image";
import React, { useState } from "react";
import Subtitle from "@/components/display/Subtitle";
import { isEqual, last } from "lodash";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type GalleryProps = {
    items: {
        id: number;
        name: string;
        fileName: string;
    }[];
};

export default function Gallery({ items }: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pathnames = usePathname().split("/");

    const handleClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex((c) => c + 1);

            return;
        }

        setCurrentIndex(0);
    };

    const handlePrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(items.length - 1);
            return;
        }

        setCurrentIndex((c) => c - 1);
    };

    return (
        <Container withDivider dividerType="space-between">
            <Subtitle size="sm">Project Shots</Subtitle>
            <Heading
                element="h2"
                className="text-heading-3 leading-heading-3 font-sans font-light tracking-widest text-rich-black mb-12"
            >
                The Gallery
            </Heading>
            <div className="flex flex-col gap-2">
                <div className="relative aspect-video">
                    <Image
                        alt={items[currentIndex].name}
                        src={`/webp/${last(pathnames)}/${items[currentIndex].fileName}`}
                        fill
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className="flex justify-between">
                    <button className="font-mono uppercase">
                        {/* View Design Comparison */}
                    </button>
                    <div className="flex gap-3">
                        <div
                            onClick={handlePrevious}
                            className="cursor-pointer"
                        >
                            <ArrowLeft size={36} weight="thin" />
                        </div>
                        <div onClick={handleNext} className="cursor-pointer">
                            <ArrowRight size={36} weight="thin" />
                        </div>
                    </div>
                </div>
                <div className="flex h-1/5 md:gap-4 mb-4 gap-3">
                    {items.map(({ id, name, fileName }, index) => (
                        <div
                            key={id}
                            onClick={() => handleClick(index)}
                            className={clsx(
                                "relative h-1/5 aspect-video w-full cursor-pointer",
                                isEqual(index, currentIndex) &&
                                    "outline outline-offset-4 outline-2 outline-rich-black"
                            )}
                        >
                            <Image
                                alt={name}
                                src={`/webp/${last(pathnames)}/${fileName}`}
                                quality={100}
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
