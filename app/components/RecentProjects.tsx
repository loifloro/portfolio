import { Fragment } from "react";
import Tag from "./display/Tag";
import Subtitle from "./display/Subtitle";
import GradientLine from "./GradientLine";
import ArrowLink from "./button/ArrowLink";
import Container from "./container/Container";

export default function RecentProjects() {
    const data = [
        {
            id: 1,
            name: "Youtube Playlist Calculator",
            description:
                "A SPA (Single Page Application) used for computing the total time of a YouTube Playlist. The application offers time conversion for the total minute, hours, or the ISO 8601 time format.",
            tags: [
                { id: 1, name: "Ui Design" },
                { id: 2, name: "Web Development" },
            ],
            link: "youtube-playlist-calculator",
        },
        {
            id: 2,
            name: "Patient Record Management System",
            description:
                "An undergraduate capstone project, this record management system focused on digitizing the services of Barangay Health Centers in Dasmariñas, Cavite.",
            tags: [
                { id: 1, name: "Ui Design" },
                { id: 2, name: "Responsive Design" },
            ],
            link: "patient-record-management-system",
        },
        {
            id: 3,
            name: "Random Advice Generator",
            description:
                "A Frontend Mentor Challenge that randomly showcases advice using Advice Slip API. This simple project aims to showcase the ability to convert a pixel perfect conversion from the design to the actual web app.",
            tags: [
                { id: 1, name: "Ui Design" },
                { id: 2, name: "Responsive Design" },
            ],
            link: "random-advice-generator",
        },
        {
            id: 4,
            name: "IP Address Tracker",
            description:
                "A Frontend Mentor Challenge that randomly showcases advice using Advice Slip API. This simple project aims to showcase the ability to convert a pixel perfect conversion from the design to the actual web app.",
            tags: [
                { id: 1, name: "Ui Design" },
                { id: 2, name: "Responsive Design" },
            ],
            link: "ip-address-tracker",
        },
        {
            id: 5,
            name: "CSS Zen Garden",
            description:
                "A Frontend Mentor Challenge that randomly showcases advice using Advice Slip API. This simple project aims to showcase the ability to convert a pixel perfect conversion from the design to the actual web app.",
            tags: [
                { id: 1, name: "Ui Design" },
                { id: 2, name: "Responsive Design" },
            ],
            link: "css-zen-garden",
        },
    ];

    return (
        <Container>
            <Subtitle name="Five Most Recent Works" />
            <h3 className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[20px] text-rich-black mb-24">
                Projects
            </h3>
            {data.map(({ id, name, description, tags, link }) => (
                <Fragment key={id}>
                    <div className="flex justify-between mt-11 mb-4">
                        <div className="max-w-[60%]">
                            <h3 className="uppercase text-rich-black text-heading-3 tracking-widest font-normal mb-2">
                                {name}
                            </h3>
                            <p className="text-battleship-gray font-light text-base">
                                {description}
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-8">
                            <div className="flex flex-col items-end gap-2">
                                {tags.map(({ id, name }) => (
                                    <Tag key={id} name={name} />
                                ))}
                            </div>
                            <ArrowLink name="View Project" url={link} />
                        </div>
                    </div>
                    <GradientLine type="space-between" />
                </Fragment>
            ))}
        </Container>
    );
}
