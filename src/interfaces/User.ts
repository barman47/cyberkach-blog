import { UserType } from '@/utils/constants';

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: UserType;
    disabled: boolean;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
    avatar: string;
    avatarKey: string;
};