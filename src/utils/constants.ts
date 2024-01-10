import { Pagination } from '@/redux/features/postsSlice';

export interface ApiResponse {
    success: boolean;
    data: any;
    msg?: string;
    token?: string;
    statusCode: number;
    pagination?: Pagination
};

export type ApiErrorResponse = Omit<ApiResponse, 'token'>;

export enum UserType  {
    VISITOR = 'VISITOR',
    AUTHOR = 'AUTHOR',
    ADMIN = 'ADMIN'
};

export interface Error {
    msg?: string;
};

export interface ErrorObject<T> {
    errors: T;
    isValid: boolean;
};