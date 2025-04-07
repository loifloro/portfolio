import { ProjectList } from "types/project";

export const projects = <ProjectList>[
    {
        id: 1,
        slug: "youtube-playlist-calculator",
        name: "Youtube Playlist Calculator",
        shortDescription:
            "A SPA (Single Page Application) used for computing the total time of a YouTube Playlist.",
        description:
            "A SPA (Single Page Application) used for computing the total time of a YouTube Playlist. The application offers time conversion for the total minute, hours, or the ISO 8601 time format.",
        tags: [
            { id: 1, name: "Web Development" },
            { id: 2, name: "UI Design" },
            { id: 3, name: "React JS" },
            { id: 4, name: "API" },
            { id: 5, name: "Vercel" },
        ],
        liveUrl: "https://yt-playlist-calcu-dev.vercel.app/",
        githubUrl: "https://github.com/loifloro/yt-playlist-duration",
        thumbnail: "thumbnail.webp",
        reason: "The project idea comes from the many times I've struggle estimating how much time I can prioritize binging a certain playlist on Youtube, especially crash courses when they are still relevant for beginners. By this idea, I wonder why Youtube doesn't easily provide it's playlist duration, well I guess it is organic to how Youtube works to engage audience to binge all available playlists. When I realized that, I concluded that I should do my own, for my own sanity. ",
        mainImg: "youtube-playlist-calculator-hero.jpg",
        pallette: [
            {
                id: 1,
                name: "Imperial red",
                strokeCode: "BD0009",
                colorCode: "FB2C36",
            },
            {
                id: 2,
                name: "Red",
                strokeCode: "AF0009",
                colorCode: "E7000B",
            },
            {
                id: 3,
                name: "Black",
                strokeCode: "000000",
                colorCode: "09090B",
            },
        ],
        palletteDescription:
            "The goal of this project is to how it can be simple while doing enough to capture the user's attention, as well to build an illusion of credibility by manipulating the Youtube UI Design to this project.",
        process: [
            {
                id: 1,
                title: "API Implementation",
                description:
                    "Researching of Youtube API usages onto how it can get to compute the total video durations of an entire playlist.",
            },
            {
                id: 2,
                title: "UI Design",
                description:
                    "The aim of design for this project is onto how it can be close to the Youtube UI as much as possible in order for it to be achieve the illusion of credibility.",
                side: "left",
            },
            {
                id: 3,
                title: "Tools Research",
                description:
                    "One of the goals of this project is to explore new technologies such as the useActionState of React, Tailwind 4.0, Vite etc.",
            },
            {
                id: 4,
                title: "Development",
                description:
                    "During the development of the project, there where certain cases that needed to do such as validating valid Youtube Playlist URL so that API calls wouldn't exhaust resources.",
                side: "left",
            },
            {
                id: 5,
                title: "Deployment",
                description:
                    "As stated above, one of the goals of this project is to explore technologies I haven't used before, so I decided to deploy this project on Vercel.",
            },
        ],
        gallery: [
            {
                id: 1,
                name: "Landing Page",
                fileName: "1.webp",
            },
            {
                id: 2,
                name: "Result",
                fileName: "2.webp",
            },
            {
                id: 3,
                name: "Error",
                fileName: "3.webp",
            },
            {
                id: 4,
                name: "Filters",
                fileName: "4.webp",
            },
            {
                id: 5,
                name: "Mobile Shots",
                fileName: "5.webp",
            },
        ],
    },
    {
        id: 2,
        slug: "space-tourism",
        name: "Space Tourism",
        shortDescription:
            "A Frontend Mentor challenge that focuses on building a responsive website and powered by animations.",
        description:
            "A Frontend Mentor challenge that focuses on building a responsive website and powered by animations. This challenge explores the routing in React and the use of Github Actions for deployment.",
        tags: [
            { id: 1, name: "Responsive Design" },
            { id: 2, name: "Animation" },
            { id: 3, name: "Github Action" },
            { id: 4, name: "Github Pages" },
            { id: 5, name: "React Router" },
            { id: 6, name: "Axios" },
        ],
        liveUrl: "https://loifloro.github.io/space-tourism/",
        githubUrl: "https://github.com/loifloro/space-tourism",
        thumbnail: "thumbnail.webp",
        mainImg: "space-tourism-hero.jpg",
        reason: "The goal of this project is to build a fully responsive website at the same time consuming a json file to populate the page and be able to toggle between the tabs to see new information.",
        pallette: [
            {
                id: 1,
                name: "Rich Black",
                strokeCode: "162053",
                colorCode: "0B0D17",
            },
            {
                id: 2,
                name: "Periwinkle",
                strokeCode: "91A0F6",
                colorCode: "D0D6F9",
            },
            {
                id: 3,
                name: "White",
                strokeCode: "FFF7F7",
                colorCode: "FFFFFF",
            },
        ],
        palletteDescription:
            "The pallette uses space colors to emulate the feel that the user is traveling in space. It gives illusion of dark night skies with the stars shining through.",
        process: [
            {
                id: 1,
                title: "React Router Setup",
                description:
                    "This is my first time using React Router and was quite overwhelmed how different it was as a framework. I had a struggle deploying it to Github Pages via Github Actions but was resolved by configuring it for client side rendering and updating the project basename.",
            },
            {
                id: 2,
                title: "Mobile First Workflow",
                description:
                    "When developing this project, my goal is to fully utilize mobile first workflow to have an advantage adjusting the layout when the viewport width increases.",
                side: "left",
            },
            {
                id: 3,
                title: "Fetching Using Axios",
                description:
                    "One of the goals of this project is to learn the basics of a Github Workflow, so I created a Github Action for deployment to Github Pages. I have learned different parts that consist a Github Action.",
            },
            {
                id: 4,
                title: "Creating Github Workflow",
                description:
                    "One of the goals of this project is to learn the basics of a Github Workflow, so I created a Github Action for deployment to Github Pages. I have learned different parts that consist a Github Action.",
                side: "left",
            },
            // {
            //     id: 5,
            //     title: "Vitae nunc at",
            //     description:
            //         "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
            // },
        ],
        gallery: [
            {
                id: 1,
                name: "Home",
                fileName: "1.webp",
            },
            {
                id: 2,
                name: "Destination",
                fileName: "2.webp",
            },
            {
                id: 3,
                name: "Crew",
                fileName: "3.webp",
            },
            {
                id: 4,
                name: "Destination",
                fileName: "4.webp",
            },
            {
                id: 5,
                name: "Mobile Shots",
                fileName: "5.webp",
            },
        ],
    },
    // {
    //     id: 3,
    //     slug: "patient-record-system",
    //     name: "Patient Record System",
    //     shortDescription:
    //         "A SPA (Single Page Application) used for computing the total time of a YouTube Playlist.",
    //     description:
    //         "An undergraduate capstone project, this record management system focused on digitizing the services of Barangay Health Centers in Dasmariñas, Cavite.",
    //     tags: [
    //         { id: 1, name: "Web Development" },
    //         { id: 2, name: "UI Design" },
    //         { id: 3, name: "React JS" },
    //         { id: 4, name: "API" },
    //         { id: 5, name: "Vercel" },
    //     ],
    //     liveUrl: "",
    //     githubUrl: "",
    //     thumbnail: "",
    //     mainImg: "project-current-img-placeholder.png",
    //     reason: "",
    //     pallette: [
    //         {
    //             id: 1,
    //             name: "Gold",
    //             strokeCode: "FFD500",
    //             colorCode: "AA931E",
    //         },
    //         {
    //             id: 2,
    //             name: "Rose Ebony",
    //             strokeCode: "392020",
    //             colorCode: "543636",
    //         },
    //         {
    //             id: 3,
    //             name: "Misty Rose",
    //             strokeCode: "FFFFFF",
    //             colorCode: "EBD2D2",
    //         },
    //         {
    //             id: 4,
    //             name: "Blood Red",
    //             strokeCode: "500000",
    //             colorCode: "6E0909",
    //         },
    //         {
    //             id: 5,
    //             name: "Rosy Brown",
    //             strokeCode: "AC7070",
    //             colorCode: "B88A8A",
    //         },
    //     ],
    //     palletteDescription:
    //         "A viverra ut eget urna amet cras pharetra. Risus vitae quam libero pellentesque. Vitae nibh mollis platea sem justo dis ultrices. Aliquet non sit accumsan placerat varius diam nec. Scelerisque odio nunc pharetra felis leo sem est pharetra. Adipiscing nisl at eget feugiat senectus id aliquet. At feugiat est turpis posuere lorem.",
    //     process: [
    //         {
    //             id: 1,
    //             title: "Mood Boarding",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //         },
    //     ],
    //     gallery: [
    //         {
    //             id: 1,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 2,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 3,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 5,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 6,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //     ],
    // },
    // {
    //     id: 4,
    //     slug: "css-zen-garden",
    //     name: "CSS Zen Garden",
    //     shortDescription:
    //         "A SPA (Single Page Application) used for computing the total time of a YouTube Playlist.",
    //     description:
    //         "An undergraduate capstone project, this record management system focused on digitizing the services of Barangay Health Centers in Dasmariñas, Cavite.",
    //     tags: [
    //         { id: 1, name: "Web Development" },
    //         { id: 2, name: "UI Design" },
    //         { id: 3, name: "React JS" },
    //         { id: 4, name: "API" },
    //         { id: 5, name: "Vercel" },
    //     ],
    //     liveUrl: "",
    //     githubUrl: "",
    //     thumbnail: "",
    //     mainImg: "project-current-img-placeholder.png",
    //     reason: "",
    //     pallette: [
    //         {
    //             id: 1,
    //             name: "Gold",
    //             strokeCode: "FFD500",
    //             colorCode: "AA931E",
    //         },
    //         {
    //             id: 2,
    //             name: "Rose Ebony",
    //             strokeCode: "392020",
    //             colorCode: "543636",
    //         },
    //         {
    //             id: 3,
    //             name: "Misty Rose",
    //             strokeCode: "FFFFFF",
    //             colorCode: "EBD2D2",
    //         },
    //         {
    //             id: 4,
    //             name: "Blood Red",
    //             strokeCode: "500000",
    //             colorCode: "6E0909",
    //         },
    //         {
    //             id: 5,
    //             name: "Rosy Brown",
    //             strokeCode: "AC7070",
    //             colorCode: "B88A8A",
    //         },
    //     ],
    //     palletteDescription:
    //         "A viverra ut eget urna amet cras pharetra. Risus vitae quam libero pellentesque. Vitae nibh mollis platea sem justo dis ultrices. Aliquet non sit accumsan placerat varius diam nec. Scelerisque odio nunc pharetra felis leo sem est pharetra. Adipiscing nisl at eget feugiat senectus id aliquet. At feugiat est turpis posuere lorem.",
    //     process: [
    //         {
    //             id: 1,
    //             title: "Mood Boarding",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //
    //         },
    //         {
    //             id: 2,
    //             title: "Nunc tempor",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //             side: "left",
    //         },
    //         {
    //             id: 3,
    //             title: "Id felis",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //
    //         },
    //         {
    //             id: 4,
    //             title: "Sociis urna diam",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //             side: "left",
    //         },
    //         {
    //             id: 5,
    //             title: "Vitae nunc at",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //
    //         },
    //     ],
    //     gallery: [
    //         {
    //             id: 1,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 2,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 3,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 5,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 6,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //     ],
    // },
    // {
    //     id: 5,
    //     slug: "quizzard",
    //     name: "Quizzard",
    //     shortDescription:
    //         "A SPA (Single Page Application) used for computing the total time of a YouTube Playlist.",
    //     description:
    //         "An undergraduate capstone project, this record management system focused on digitizing the services of Barangay Health Centers in Dasmariñas, Cavite.",
    //     tags: [
    //         { id: 1, name: "Web Development" },
    //         { id: 2, name: "UI Design" },
    //         { id: 3, name: "React JS" },
    //         { id: 4, name: "API" },
    //         { id: 5, name: "Vercel" },
    //     ],
    //     liveUrl: "",
    //     githubUrl: "",
    //     thumbnail: "",
    //     mainImg: "project-current-img-placeholder.png",
    //     reason: "",
    //     pallette: [
    //         {
    //             id: 1,
    //             name: "Gold",
    //             strokeCode: "FFD500",
    //             colorCode: "AA931E",
    //         },
    //         {
    //             id: 2,
    //             name: "Rose Ebony",
    //             strokeCode: "392020",
    //             colorCode: "543636",
    //         },
    //         {
    //             id: 3,
    //             name: "Misty Rose",
    //             strokeCode: "FFFFFF",
    //             colorCode: "EBD2D2",
    //         },
    //         {
    //             id: 4,
    //             name: "Blood Red",
    //             strokeCode: "500000",
    //             colorCode: "6E0909",
    //         },
    //         {
    //             id: 5,
    //             name: "Rosy Brown",
    //             strokeCode: "AC7070",
    //             colorCode: "B88A8A",
    //         },
    //     ],
    //     palletteDescription:
    //         "A viverra ut eget urna amet cras pharetra. Risus vitae quam libero pellentesque. Vitae nibh mollis platea sem justo dis ultrices. Aliquet non sit accumsan placerat varius diam nec. Scelerisque odio nunc pharetra felis leo sem est pharetra. Adipiscing nisl at eget feugiat senectus id aliquet. At feugiat est turpis posuere lorem.",
    //     process: [
    //         {
    //             id: 1,
    //             title: "Mood Boarding",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //
    //         },
    //         {
    //             id: 2,
    //             title: "Nunc tempor",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //             side: "left",
    //         },
    //         {
    //             id: 3,
    //             title: "Id felis",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //
    //         },
    //         {
    //             id: 4,
    //             title: "Sociis urna diam",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //             side: "left",
    //         },
    //         {
    //             id: 5,
    //             title: "Vitae nunc at",
    //             description:
    //                 "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
    //
    //         },
    //     ],
    //     gallery: [
    //         {
    //             id: 1,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 2,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 3,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 5,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //         {
    //             id: 6,
    //             name: "",
    //             fileName: "project-current-img-placeholder.png",
    //         },
    //     ],
    // },
];
