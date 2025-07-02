import { ProjectList } from "types/project";

export const recentProjects = <ProjectList>[
    {
        id: 1,
        slug: "youtube-playlist-calculator",
        name: "Youtube Playlist Calculator",
        shortDescription:
            "A responsive Single Page Application that calculates the total duration of a YouTube playlist using the YouTube Data API",
        description:
            "A responsive Single Page Application that calculates the total duration of a YouTube playlist using the YouTube Data API. Supports time conversion to minutes, hours, and ISO 8601 format, with a focus on usability and clean interface design.",
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
        reason: "This project was born out of a personal frustration—I often found myself trying to estimate how much time I’d need to binge-watch educational YouTube playlists, especially crash courses for beginners. Surprisingly, YouTube doesn’t display total playlist durations, which seems intentional—perhaps to keep viewers engaged and unaware of how much time they’re investing. Realizing this gap, I decided to build a solution for myself—a simple, focused tool to calculate playlist durations and help others manage their time better.",
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
            "The aim of this project was to demonstrate how a simple concept can still capture a user's attention through thoughtful design. By closely mimicking YouTube's own UI patterns, the application builds an illusion of credibility, making the experience feel familiar and trustworthy. This approach reinforces usability while showcasing how minimal features, when presented effectively, can deliver real value.",
        process: [
            {
                id: 1,
                title: "API Implementation",
                description:
                    "Researched how to use the YouTube Data API to compute the total duration of all videos in a playlist.",
            },
            {
                id: 2,
                title: "UI Design",
                description:
                    "Designed the interface to closely resemble YouTube's UI in order to create a familiar experience and establish an illusion of credibility.",
                side: "left",
            },
            {
                id: 3,
                title: "Tools Research",
                description:
                    "Explored new technologies such as React’s useActionState, Tailwind CSS v4.0, and Vite as part of the project's learning objectives.",
            },
            {
                id: 4,
                title: "Development",
                description:
                    "Handled development edge cases, such as validating YouTube playlist URLs to prevent unnecessary or invalid API requests.",
                side: "left",
            },
            {
                id: 5,
                title: "Deployment",
                description:
                    "To align with the project’s goal of exploring new tools, the application was deployed using Vercel for seamless CI/CD integration.",
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
        slug: "patient-record-management-system",
        name: "Patient Record Management System",
        shortDescription:
            "A web-based patient record management system designed to digitize the operations of Barangay Health Centers in Dasmariñas, Cavite.",
        description:
            "A web-based patient record management system designed to digitize the operations of Barangay Health Centers in Dasmariñas, Cavite. Features include digital patient records and medical history tracking to improve efficiency and reduce reliance on manual paperwork.",
        tags: [
            { id: 1, name: "System Design" },
            { id: 2, name: "Full Stack App" },
            { id: 3, name: "PHP" },
            { id: 4, name: "Sass" },
            { id: 5, name: "Vanilla Javascript" },
            { id: 6, name: "Responsive Design" },
        ],
        githubUrl: "https://github.com/loifloro/barangay-datu-esmael-rms",
        thumbnail: "thumbnail.webp",
        mainImg: "patient-record-management-system-hero.jpg",
        reason: "The goal of this project was to provide an easy-to-use digital platform for both Barangay Health Center staff and patients by streamlining and digitizing the entire record-keeping process. It aimed to reduce manual paperwork and improve accessibility to medical records and services. One of the main challenges was designing an interface that would not overwhelm or confuse patients—particularly those who are inexperienced with digital tools. The application needed to be intuitive, clear, and accessible to users of all ages and technical backgrounds.",
        pallette: [
            {
                id: 1,
                name: "Honey Dew",
                strokeCode: "CFFADF",
                colorCode: "ECFCF2",
            },
            {
                id: 2,
                name: "Cal Poly Green",
                strokeCode: "04A04A",
                colorCode: "034A23",
            },
            {
                id: 3,
                name: "Mint Green",
                strokeCode: "B2FFFE",
                colorCode: "d7fffe",
            },
        ],
        palletteDescription:
            "The color palette was inspired by the official branding of the City of Dasmariñas, maintaining a strong local identity. To align the design with the healthcare context, we modified the city’s original colors by incorporating calming medical tones—primarily shades of green and blue. Green was chosen to evoke a sense of peace and reassurance, aiming to make patients feel safe and at ease while using the web application.",
        process: [
            {
                id: 1,
                title: "Requirements Collection",
                description:
                    "Before development began, we gathered all necessary information about the available services at the beneficiary health center. This involved conducting interviews with Barangay Health Workers and the assigned City Health Nurse to understand their workflows and pain points.",
            },
            {
                id: 2,
                title: "System Design",
                description:
                    "After collecting the data, we identified key issues and planned solutions. The system was then designed in Figma, carefully modeling the UI based on the existing physical forms used by the Barangay Health Center to ensure familiarity and ease of adoption.",
                side: "left",
            },
            {
                id: 3,
                title: "Technology Research",
                description:
                    "Given our limited experience as student developers, we researched best practices for using vanilla PHP, Sass for styling, and asset optimization. Our goal was to build the system with a focus on reusability of components, styles, and database queries.",
            },
            {
                id: 4,
                title: "Collaborative Development",
                description:
                    "This was our first real project using GitHub for version control. My partner and I made collaboration a core part of our workflow—creating branches, submitting pull requests, and clearly separating frontend and backend development to streamline progress and improve team coordination.",
                side: "left",
            },
            {
                id: 5,
                title: "Continued Development",
                description:
                    "Now that the project is stable, I’m exploring the possibility of rebuilding it using Laravel for the backend or as a full-stack JavaScript application. This will allow me to enhance my skills and work toward becoming a full-stack developer.",
            },
        ],
        gallery: [
            {
                id: 1,
                name: "Dashboard",
                fileName: "1.webp",
            },
            {
                id: 2,
                name: "Login",
                fileName: "2.webp",
            },
            {
                id: 3,
                name: "Add New Consultation",
                fileName: "3.webp",
            },
            {
                id: 4,
                name: "Patients List",
                fileName: "4.webp",
            },
            {
                id: 5,
                name: "Super Admin Profile",
                fileName: "5.webp",
            },
        ],
    },
    {
        id: 3,
        slug: "casa-de-matilda",
        name: "Casa de Matilda",
        shortDescription:
            "A marketing website for Casa de Matilda with a built-in booking system",
        description:
            "A marketing website for Casa de Matilda with a built-in booking system, allowing guests to explore the property and schedule visits with ease.",
        tags: [
            { id: 1, name: "Landing Page" },
            { id: 2, name: "PWA" },
            { id: 3, name: "Next JS" },
            { id: 4, name: "MongoDB" },
            { id: 5, name: "AWS Ses" },
            { id: 6, name: "Material UI" },
        ],
        liveUrl: "https://casa-de-matilda.vercel.app/",
        thumbnail: "thumbnail.webp",
        mainImg: "casa-de-matilda-hero.jpg",
        reason: "The goal of this project is to build a booking platform for Casa de Matilda, allowing guests to schedule stays while providing admins with tools to manage bookings, events, and gallery content securely and efficiently.",
        pallette: [
            {
                id: 1,
                name: "Alice Blue",
                strokeCode: "84D0FF",
                colorCode: "EFF9FF",
            },
            {
                id: 2,
                name: "Rich Black",
                strokeCode: "00324F",
                colorCode: "051620",
            },
            {
                id: 3,
                name: "Baby Powder",
                strokeCode: "EAFCFF",
                colorCode: "F9FEFF",
            },
        ],
        palletteDescription:
            "The brand theme of Casa de Matilda revolves around the same theme as Santoriniesque, so I wanted to make sure that it translates the feeling of minimalist, whites, cozy, intimate, and fresh",
        process: [
            {
                id: 1,
                title: "Creative Direction",
                description:
                    "First step that I did on this project was to propose 3 creative direction that Casa de Matilda can go. The lists of direction provided was 1. Minimalist /Santorini, Whites, Brief and Modern. 2. Tropical, Gen Z and millennial combined. 3. Luxurious, Fierce and does have brown accent colors. The first being the choice.",
            },
            {
                id: 2,
                title: "Marketing Page UI Design",
                description:
                    "Upon deciding what direction the brand would take, marketing page ui design is created.",
                side: "left",
            },
            {
                id: 3,
                title: "Converting using NextJS and Material UI",
                description:
                    "Since Material UI is a popular UI framework, I think it would be better to create a project using this widely documented framework with NextJS to fully utilize its API Routes.",
            },
            {
                id: 4,
                title: "Development of Admin Side",
                description:
                    "Now that the project is in Minimum Viable Product (MVP) and marketing page sufficed its purpose, the booking system is now under",
                side: "left",
            },
        ],
        gallery: [
            {
                id: 1,
                name: "Hero Section",
                fileName: "1.webp",
            },
            {
                id: 2,
                name: "Gallery",
                fileName: "2.webp",
            },
            {
                id: 3,
                name: "Amenities",
                fileName: "3.webp",
            },
            {
                id: 4,
                name: "Reviews",
                fileName: "4.webp",
            },
            {
                id: 5,
                name: "Location",
                fileName: "5.webp",
            },
        ],
    },
];

export const frontendMentor = <ProjectList>[
    {
        id: 1,
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
            { id: 6, name: "Zustand" },
            { id: 7, name: "CSS Modules" },
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
    {
        id: 3,
        slug: "space-tourism",
        name: "Space Tourism",
        shortDescription:
            "A Frontend Mentor challenge focused on building a fully responsive website with smooth UI animations.",
        description:
            "A Frontend Mentor challenge focused on building a fully responsive website with smooth UI animations. The project emphasizes layout precision, interactive elements, and modern frontend techniques to replicate a professional design spec.",
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
];
