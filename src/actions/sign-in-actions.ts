import axios from "axios";
import { Dispatch } from "react-redux";
import { ICredentials, IUser } from "../types/types";
import { SignInActionKeys } from "./action-keys";

interface ISigningInAction {
    type: SignInActionKeys.SIGNING_IN;
    signingIn: boolean;
}

interface ISignInSuccessAction {
    type: SignInActionKeys.SIGN_IN_SUCCESS;
    signingIn: boolean;
    user: IUser;
}

interface ISignInFailureAction {
    type: SignInActionKeys.SIGN_IN_FAILURE;
    signingIn: boolean;
    error: any;
}

interface ISigningOutAction {
    type: SignInActionKeys.SIGNING_OUT;
    signingOut: boolean;
}

interface ISignOutSuccessAction {
    type: SignInActionKeys.SIGN_OUT_SUCCESS;
    signingOut: boolean;
    user: IUser;
}

interface ISignOutFailureAction {
    type: SignInActionKeys.SIGN_OUT_FAILURE;
    signingOut: boolean;
    error: any;
}

export type LoginActionTypes = ISigningInAction | ISignInSuccessAction | ISignInFailureAction
    | ISigningOutAction | ISignOutSuccessAction | ISignOutFailureAction;

export function signIn(credentials: ICredentials): any {
    return (dispatch: Dispatch<any>): any => {
        dispatch(signingIn());

        axios.post("/api/authenticate", credentials, { withCredentials: true })
            .then((response) => {
                if (response.status === 200) {
                    dispatch(signInSucceeded(response.data));
                }

                return response;
            })
            .catch((reason) => {
                dispatch(signInFailed(reason));
            });
    };
}

function signingIn(): ISigningInAction {
    return {
        type: SignInActionKeys.SIGNING_IN,
        signingIn: true,
    };
}

function signInSucceeded(user: IUser): ISignInSuccessAction {
    return {
        type: SignInActionKeys.SIGN_IN_SUCCESS,
        signingIn: false,
        user,
    };
}

function signInFailed(error: any): ISignInFailureAction {
    return {
        type: SignInActionKeys.SIGN_IN_FAILURE,
        signingIn: false,
        error,
    };
}

export function signOut(): any {
    return (dispatch: Dispatch<any>): any => {
        dispatch(signingOut());

        axios.get("/api/invalidate", { withCredentials: true })
            .then((response) => {
                if (response.status === 200) {
                    dispatch(signOutSucceeded());
                }

                return response;
            })
            .catch((reason) => {
                dispatch(signOutFailed(reason));
            });
    };
}

function signingOut(): ISigningOutAction {
    return {
        type: SignInActionKeys.SIGNING_OUT,
        signingOut: true,
    };
}

function signOutSucceeded(): ISignOutSuccessAction {
    return {
        type: SignInActionKeys.SIGN_OUT_SUCCESS,
        signingOut: false,
        user: null,
    };
}

function signOutFailed(error: any): ISignOutFailureAction {
    return {
        type: SignInActionKeys.SIGN_OUT_FAILURE,
        signingOut: false,
        error,
    };
}
