import { LoginActionKeys } from "../actions/action-keys";
import { LoginActionTypes } from "../actions/login-actions";
import { IUser } from "../types/types";

interface ILoginState {
    user?: IUser;
}

const initialState: ILoginState = {
    user: null,
};

export function login(state: any = initialState, action: LoginActionTypes): any {
    switch (action.type) {
        case LoginActionKeys.PERFORM_LOGIN: {
            return state;
        }
        case LoginActionKeys.LOGIN_SUCCESS: {
            return state;
        }
        case LoginActionKeys.LOGIN_FAILURE: {
            return state;
        }
        default: {
            return state;
        }
    }
}
