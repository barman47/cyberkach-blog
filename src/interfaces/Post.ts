import { Comment, Like, User } from '.';

export interface Post {
    _id: string;

    title: string;

    body: string;

    author: User | string;

    imageUrl: string;

    filename: string;

    comments: Comment[];

    slug: string;

    likes: Like[];

    draft: boolean;

    published: boolean;

    approved: boolean;

    post: string;

    date: Date;

    createdAt: Date;

    updatedAt: Date;

    lastUpdatedBy: string | User;
};