export interface User {
    id?: string;
    version?: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    enabled: boolean;
    deleted: boolean;
}

export interface Role {
    id: string;
    name: string;
}

export interface Authority {
    id: string;
    name: string;
}
