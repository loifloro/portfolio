import Container from "@/components/container/Container";
import Tag from "@/components/display/Tag";
import React from "react";

export default function ProjectHero() {
    return (
        <Container withDivider dividerType="space-between">
            <div className="min-h-screen grid items-end pb-7">
                <div className="grid grid-cols-2 justify-end">
                    <div className="flex flex-col gap-14">
                        <p className="mb">01/05</p>
                        <h1 className="leading-heading-3 text-heading-2 font-semibold uppercase align-middle tracking-widest">
                            prms - &nbsp;
                            <span className="text-heading-4 lowercase font-light tracking-wide">
                                Nulla at interdum sollicitudin adipiscing. Vitae
                                viverra augue sagittis magna.
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-col items-end gap-16">
                        <div className="flex gap-2 flex-wrap">
                            <Tag name="Krer" />
                            <Tag name="Krer" />
                            <Tag name="Krer" />
                            <Tag name="Krer" />
                        </div>
                        <div>ffwfw</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
