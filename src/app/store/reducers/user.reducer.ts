import * as UserActions from '../actions/active-user.action';
import { UserState } from '../models/user.model';

export const initialState: UserState = {
    username: '',
    roleId: 2
}

const returnNewState = (oldState: any, newState: any) => {
    return Object.assign({}, oldState, newState);
}

export function userReducer(
    state = initialState,
    action: UserActions.UserActions,
) {
    switch(action.type) {
        case UserActions.CREATE_ACTIVE_USER: {
            return returnNewState(state, action.payload )
        }

        case UserActions.LOGOUT_ACTIVE_USER: {
            return initialState
        }
    }

    return state
}