import ArrowLink from "./components/button/ArrowLink";
import Container from "./components/container/Container";
import GradientLine from "./components/GradientLine";
import React from "react";

export default function NotFound() {
    return (
        <Container>
            <div className="min-h-screen flex justify-center items-center min-w-[50%]">
                <div className="flex flex-col gap-16 min-w-[50%]">
                    <h1 className="text-9xl font-light bg-gradient-centered bg-clip-text text-transparent max-w-fit mx-auto">
                        404
                    </h1>
                    <div className="flex flex-col items-center">
                        <h2 className="uppercase text-heading-4 text-rich-black font-light tracking-widest">
                            Page Not Found
                        </h2>
                        <p className="text-battleship-gray ">
                            Seems like this page doesn’t exist
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-5 ">
                        <ArrowLink name="Go Back Home" url="/" />
                        <GradientLine type="centered" />
                    </div>
                </div>
            </div>
        </Container>
    );
}
