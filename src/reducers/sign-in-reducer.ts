import { SignInActionKeys } from "../actions/action-keys";
import { LoginActionTypes } from "../actions/sign-in-actions";
import { IUser } from "../types/types";

export interface ISignInState {
    user?: IUser;
    signingIn: boolean;
    signingOut: boolean;
    error: any;
}

const initialState: ISignInState = {
    user: null,
    signingIn: false,
    signingOut: false,
    error: null,
};

export function signIn(state: ISignInState = initialState, action: LoginActionTypes): ISignInState {
    switch (action.type) {
        case SignInActionKeys.SIGNING_IN: {
            return { ...state, signingIn: action.signingIn };
        }
        case SignInActionKeys.SIGN_IN_SUCCESS: {
            return { ...state, signingIn: action.signingIn, user: action.user };
        }
        case SignInActionKeys.SIGN_IN_FAILURE: {
            return { ...state, signingIn: action.signingIn, error: action.error };
        }
        case SignInActionKeys.SIGNING_OUT: {
            return { ...state, signingOut: action.signingOut };
        }
        case SignInActionKeys.SIGN_OUT_SUCCESS: {
            return { ...state, signingOut: action.signingOut, user: action.user };
        }
        case SignInActionKeys.SIGN_OUT_FAILURE: {
            return { ...state, signingOut: action.signingOut, error: action.error };
        }
        default: {
            return state;
        }
    }
}
