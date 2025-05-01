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
        liveUrl: "https://yt-playlist-calcu.vercel.app/",
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
    {
        id: 3,
        slug: "rock-paper-scissors",
        name: "Rock Paper Scissors",
        shortDescription:
            "A two player online rock paper scissors game built for realtime connectivity.",
        description:
            "A two player online rock paper scissors game built for realtime connectivity. This game can be played against the computer or an invitation to another player.",
        tags: [
            { id: 1, name: "WebSockets" },
            { id: 2, name: "Game Design" },
            { id: 3, name: "Express JS" },
            { id: 4, name: "React" },
            { id: 5, name: "Socket.io" },
            { id: 5, name: "Zustand" },
            { id: 5, name: "CSS Modules" },
        ],
        liveUrl: "https://rock-paper-scissors-1-mnoe.onrender.com/",
        githubUrl: "https://github.com/loifloro/rock-paper-scissors",
        thumbnail: "thumbnail.webp",
        mainImg: "rock-paper-scissors-hero.jpg",
        reason: "The goal for this project is to practice the usage of a bidirectional data flow utilizing Web Sockets. By implementing a two player feature, a connection handling is crucial for each session for seamless game experience.",
        pallette: [
            {
                id: 1,
                name: "Space Cadet",
                strokeCode: "06096A",
                colorCode: "141539",
            },
            {
                id: 2,
                name: "Violet Blue",
                strokeCode: "002FFF",
                colorCode: "2A46C0",
            },
            {
                id: 3,
                name: "Prussian Blue",
                strokeCode: "006FFF",
                colorCode: "1F3756",
            },
        ],
        palletteDescription:
            "The game emphasizes the character pick buttons, with this emphasis the palette uses a lot of blues to avoid players from distraction. The game also uses accent colors for different pick to have different identity with each other and to help create familiarization with game players.",
        process: [
            {
                id: 1,
                title: "Game against computer",
                description:
                    "First step of the development process of this project was to first create it vs. computer where the computation would also be the same when there will be other player connected.",
            },
            {
                id: 2,
                title: "Server Setup",
                description:
                    "After creating the frontend with the computer as the only opponent, the backend server is created using Express JS with Socket IO to implement WebSockets connection.",
                side: "left",
            },
            {
                id: 3,
                title: "Implementing opponent connection",
                description:
                    "Once the WebSocket connection has been running, the connectivity between two players is now being tested on what are bugs that hey can arise once they start interacting with each other.",
            },
            {
                id: 4,
                title: "Deploying to Render",
                description:
                    "One of the most crucial part of this project is deploying the backend on a web service. Unlike Vercel, Render supports WebSocket connection so this application was deployed to Render. On deploying, I had to figure out the change of URL between production and development.",
                side: "left",
            },
            {
                id: 5,
                title: "Playing out with friends",
                description:
                    "No project is ever done, this project will always be used and there will be some issues always encountered, some enhancement to be made. With this application I always share it to friends just for fun and ask if they did encounter some issues, you something light and cool to talk about.",
            },
        ],
        gallery: [
            {
                id: 1,
                name: "Selection",
                fileName: "1.webp",
            },
            {
                id: 2,
                name: "Won",
                fileName: "2.webp",
            },
            {
                id: 3,
                name: "Lose",
                fileName: "3.webp",
            },
            {
                id: 4,
                name: "Rules",
                fileName: "4.webp",
            },
            {
                id: 5,
                name: "Invitation",
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
