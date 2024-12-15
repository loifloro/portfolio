export type Project = {
    id: number;
    name: string;
    slug: string;
    description: string;
    tags: string[];
    liveUrl: URL | string;
    githubUrl: URL | string;
    thumbnail: URL | string;
    mainImg: URL | string;
    reason: string;
    pallette: { name: string; hexCode: string }[];
    palletteDescription: string;
    process: { id: number; name: string; description: string }[];
    gallery: { imgId: number; imgName: string; imgUrl: string }[];
};

export type ProjectList = Project[];
