import axios from "axios";
import { Dispatch } from "react-redux";
import { IUser } from "../types/types";
import { UserActionKeys } from "./action-keys";

interface IFetchingUsersAction {
    type: UserActionKeys.FETCHING_USERS;
    fetchingUsers: boolean;
}

interface IFetchUsersSuccessAction {
    type: UserActionKeys.FETCH_USERS_SUCCESS;
    users: IUser[];
}

interface IFetchUsersFailureAction {
    type: UserActionKeys.FETCH_USERS_FAILURE;
    error: any;
}

export type UserActionTypes = IFetchingUsersAction | IFetchUsersSuccessAction | IFetchUsersFailureAction;

export function fetchUsers(): any {
    return (dispatch: Dispatch<any>): any => {
        dispatch(fetchingUsers(true));

        axios.get("/api/users", { withCredentials: true })
        .then((response) => {
            if (response.status === 200) {
                dispatch(fetchingUsersSucceeded(response.data));
            }

            return response;
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch(fetchingUsers(false));
            }

            return response;
        })
        .catch((reason) => {
            dispatch(fetchingUsersFailed(reason));
            dispatch(fetchingUsers(false));
        });
    };
}

export function fetchingUsers(fetchingUsers: boolean): IFetchingUsersAction {
    return {
        type: UserActionKeys.FETCHING_USERS,
        fetchingUsers,
    };
}

export function fetchingUsersSucceeded(users: IUser[]): IFetchUsersSuccessAction {
    return {
        type: UserActionKeys.FETCH_USERS_SUCCESS,
        users,
    };
}

export function fetchingUsersFailed(error: any): IFetchUsersFailureAction {
    return {
        type: UserActionKeys.FETCH_USERS_FAILURE,
        error,
    };
}
