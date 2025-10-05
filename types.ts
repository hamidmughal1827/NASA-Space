
export interface TeamMember {
    name: string;
    role: string;
    avatarUrl: string;
    bio: string;
    skills: string[];
    contribution: string;
}

export interface ChartData {
    name: string;
    area: number;
}

export interface TableRow {
    stage: string;
    area: number;
    change: string;
}

export enum MapTimeline {
    Pre = 'Pre-Flood',
    During = 'Peak Flood',
    Post = 'Post-Flood'
}
