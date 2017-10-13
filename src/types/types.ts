import { ISignInState } from "../reducers/sign-in-reducer";
import { IUserState } from "../reducers/user-reducer";

export interface IState {
    signIn: ISignInState;
    users: IUserState;
}

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
