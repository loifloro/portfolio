"use client";

import React, { useState } from "react";

export default function MobileMenu() {
    const [opened, isOpened] = useState<boolean>(false);

    return (
        <div className="lg:hidden flex uppercase text-mono tracking-widest text-night font-light items-center gap-[6px]">
            <span>Menu</span>
            <div className="flex flex-col gap-2">
                <span className="inline-block w-[25px] bg-rich-black h-[1.5px]"></span>
                <span className="inline-block w-[25px] bg-rich-black h-[1.5px]"></span>
            </div>
        </div>
    );
}
