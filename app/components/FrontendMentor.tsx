import React from "react";
import Subtitle from "./display/Subtitle";

export default function FrontendMentor() {
    const data = [
        {
            id: 1,
            name: "Interdum tempor urna eget",
            imgUrl: "",
        },
        {
            id: 2,
            name: "Enim risus eget",
            imgUrl: "",
        },
        {
            id: 3,
            name: "Pharetra urna cras aliquam sapien",
            imgUrl: "",
        },
        {
            id: 3,
            name: "Vitae in cum sed risus",
            imgUrl: "",
        },
        {
            id: 4,
            name: "Sit porttitor purus donec tincidunt",
            imgUrl: "",
        },
    ];

    return (
        <div className="text-center overflow-x-hidden">
            <Subtitle name="Design to Develop Challenges" />
            <h3 className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[20px] text-rich-black mb-24">
                Frontend Mentor
            </h3>
            <div className="flex">
                {data.map(({ id, name }) => (
                    <div key={id} className="min-w-[350px]">
                        <p className="font-mono text-start mb-10">{id}</p>
                        <h4 className="text-heading-4 uppercase text-start max-w-[70%]">
                            {name}
                        </h4>
                        <div></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
