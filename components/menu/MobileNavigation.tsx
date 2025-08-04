"use client";

import React, { Fragment, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function MobileNavigation() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <Fragment>
            <div
                className="lg:hidden flex uppercase font-mono tracking-widest text-rich-black font-light items-center gap-[6px]"
                onClick={handleClick}
            >
                <span role="button">Menu</span>
                <div className="flex flex-col gap-2">
                    <span className="inline-block w-[25px] bg-rich-black h-[1.5px]"></span>
                    <span className="inline-block w-[25px] bg-rich-black h-[1.5px]"></span>
                </div>
            </div>
            <MobileMenu isOpened={isOpened} handleClick={handleClick} />
        </Fragment>
    );
}
