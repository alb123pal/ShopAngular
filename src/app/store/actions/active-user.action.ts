import { Action } from '@ngrx/store';
import { UserState } from '../models/user.model';


//load active user
export const CREATE_ACTIVE_USER = '[activeUser] create';
export const LOGOUT_ACTIVE_USER = '[activeUser] logout';

export class CreateActiveUser implements Action {
    readonly type = CREATE_ACTIVE_USER;

    constructor(public payload: UserState) {
    }
}

export class LogoutActiveUser implements Action {
    readonly type = LOGOUT_ACTIVE_USER;

    constructor() {
    }
}

export type UserActions = CreateActiveUser | LogoutActiveUser;