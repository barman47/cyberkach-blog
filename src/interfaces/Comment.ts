export interface Comment {
    _id: string;
    author: string;
    text: string;
    approved: boolean;
    createdAt: Date;
}