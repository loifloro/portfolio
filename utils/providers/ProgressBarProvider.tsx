"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

type ProgressBarProviderProps = {
    children: React.ReactNode;
};

export default function ProgressBarProvider({
    children,
}: ProgressBarProviderProps) {
    return (
        <>
            {children}
            <AppProgressBar
                height="1px"
                color="var(--rich-black)"
                options={{ showSpinner: false }}
                shallowRouting
                startPosition={1}
                stopDelay={400}
                delay={400}
            />
        </>
    );
}
