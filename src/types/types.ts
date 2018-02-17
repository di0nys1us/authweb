export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    administrator: boolean;
}

export interface ICredentials {
    email: string;
    password: string;
}
