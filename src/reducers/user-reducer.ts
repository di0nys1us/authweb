import { UserActionKeys } from "../actions/action-keys";
import { UserActionTypes } from "../actions/user-actions";
import { IUser } from "../types/types";

export interface IUserState {
    users?: IUser[];
    fetchingUsers: boolean;
    error: any;
}

const initialState: IUserState = {
    users: [],
    fetchingUsers: false,
    error: null,
};

export function users(state: IUserState = initialState, action: UserActionTypes): IUserState {
    switch (action.type) {
        case UserActionKeys.FETCHING_USERS: {
            return { ...state, fetchingUsers: action.fetchingUsers };
        }
        case UserActionKeys.FETCH_USERS_SUCCESS: {
            return { ...state, users: action.users };
        }
        case UserActionKeys.FETCH_USERS_FAILURE: {
            return { ...state, error: action.error };
        }
        default: {
            return state;
        }
    }
}
