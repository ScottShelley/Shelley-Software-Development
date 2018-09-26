export interface ITech {
    id: number;
    tittle: string;
    description: string;
    imgSrc: string;
    alt: string;
    link: string;
    type: number;
}

export interface IDisplay {
    framework: ITech[];
    cloud: ITech[];
    database: ITech[];
}

export interface IProgress {
    framework: boolean;
    cloud: boolean;
    database: boolean;
}