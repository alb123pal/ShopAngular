import * as PostActions from './post.action';
import { Post } from './post-model';

export type Action = PostActions.All;

const defaultState: Post  = {
    loginName: 'brak loginu'
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function postReducer(state = defaultState, action: Action) {
    switch (action.type) {
        case PostActions.SET_LOGIN:
            return newState(state, {loginName: action.newLogin});
        default:
            return state;
    }
}
