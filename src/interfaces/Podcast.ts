import { User } from '.';

export interface Podcast {
    _id: string;
    url: string;
    title: string;
    author: User | string;
    createdAt: Date;
    updatedAt: Date;
    lastUpdatedBy: string;
}