import { ICredentials, IUser } from "../types/types";
import { LoginActionKeys } from "./action-keys";

interface IPerformLoginAction {
    credentials: any;
    type: LoginActionKeys.PERFORM_LOGIN;
}

interface ILoginSuccessAction {
    user: IUser;
    type: LoginActionKeys.LOGIN_SUCCESS;
}

interface ILoginFailureAction {
    loginFailed: boolean;
    type: LoginActionKeys.LOGIN_FAILURE;
}

export type LoginActionTypes = IPerformLoginAction | ILoginSuccessAction | ILoginFailureAction;

export function performLogin(credentials: ICredentials): IPerformLoginAction {
    return {
        credentials,
        type: LoginActionKeys.PERFORM_LOGIN,
    };
}
