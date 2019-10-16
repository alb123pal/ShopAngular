import { Action } from '@ngrx/store';

export const SET_LOGIN = 'SetLogin';
export const REMOVE_LOGIN = 'RemoveLogin';

export class SetLogin implements Action {
    readonly type = SET_LOGIN;

    constructor (public newLogin: string) {}
}

export class RemoveLogin implements Action {
    readonly type = REMOVE_LOGIN;

    constructor (public newLogin: string) {}
}

export type All = SetLogin | RemoveLogin;
