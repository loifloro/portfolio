import React from "react";
import Subtitle from "./display/Subtitle";
import Image from "next/image";

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
            id: 4,
            name: "Vitae in cum sed risus",
            imgUrl: "",
        },
        {
            id: 5,
            name: "Sit porttitor purus donec tincidunt",
            imgUrl: "",
        },
        {
            id: 6,
            name: "Vitae in cum sed risus",
            imgUrl: "",
        },
        {
            id: 7,
            name: "Sit porttitor purus donec tincidunt",
            imgUrl: "",
        },
    ];

    return (
        <div className="text-center">
            <Subtitle name="Design to Develop Challenges" />
            <h3 className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[20px] text-rich-black mb-24">
                Frontend Mentor
            </h3>
            <div className="flex items-end overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-mandatory snap-x">
                {data.map(({ id, name }) => (
                    <div key={id} className="min-w-[300px] snap-center">
                        <p className="font-mono text-start mb-10">{id}</p>
                        <h4 className="text-heading-4 uppercase text-start font-light tracking-wider max-w-[90%] mb-2 h-14 text-rich-black">
                            {name}
                        </h4>
                        <Image
                            src="/png/frontend-mentor-placeholder.png"
                            alt="name"
                            width={310}
                            height={340}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
