import Container from "./container/Container";
import React from "react";
import GradientLine from "./GradientLine";

export default function Blogs() {
    return (
        <Container>
            <div className="flex items-center gap-2">
                <GradientLine type="to-right" />
                <div className="relative">
                    <h2 className="inline-block uppercase text-heading-2 leading-heading-2 font-semibold ml-5 tracking-[20px] text-battleship-gray">
                        Blogs
                    </h2>
                    <span className="uppercase min-w-max absolute font-mono font-thin bottom-full left-3/4">
                        Coming Soon!
                    </span>
                </div>
                <GradientLine type="to-left" />
            </div>
        </Container>
    );
}
