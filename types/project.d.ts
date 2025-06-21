export type Project = {
    id: number;
    name: string;
    slug: string;
    description: string;
    shortDescription: string;
    tags: { id: number; name: string }[];
    liveUrl?: string;
    githubUrl?: string;
    thumbnail: string;
    mainImg: string;
    reason: string;
    pallette: {
        id: number;
        name: string;
        colorCode: string;
        strokeCode: string;
    }[];
    palletteDescription: string;
    process: { id: number; title: string; description: string }[];
    gallery: { id: number; name: string; fileName: string }[];
};

export type ProjectList = Project[];
