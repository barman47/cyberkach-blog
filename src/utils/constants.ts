export enum UserType  {
    VISITOR = 'VISITOR',
    AUTHOR = 'AUTHOR',
    ADMIN = 'ADMIN'
};

export interface ErrorObject<T> {
    errors: T;
    isValid: boolean;
};