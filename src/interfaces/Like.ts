import { User } from '.';

export interface Like {
    _id: string;
    user: string | User;
    createdAt: Date;
}