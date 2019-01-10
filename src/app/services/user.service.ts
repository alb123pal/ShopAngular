import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {}
    baseUrl = 'http://localhost:3000/';

    getUser() {
        return ['stasiek', 'franek'];
    }

    authorizeUser(login: string, password: string) {
        const params = {
            login: login,
            password: password
        };
        localStorage.setItem('login', params.login);
        return this.httpClient.post(`${this.baseUrl}api/login`,
            params, { headers: new HttpHeaders({
                        'Access-Control-Expose-Headers': 'session-token',
                        'Access-Control-Allow-Headers': 'session-token',
                }),
                responseType: 'text',
                observe: 'response',
        })
        .pipe(catchError(this.handlerError));
    }

    getProducts() {
        const sessionToken = localStorage.getItem('sessionToken');
        return this.httpClient.get(`${this.baseUrl}api/products`, { headers: new HttpHeaders({
            'session-token': sessionToken,
            }),
            observe: 'response',
        })
        .pipe(catchError(this.handlerError));
    }

    getRoles() {
        const sessionToken = localStorage.getItem('sessionToken');
        return this.httpClient.get(`${this.baseUrl}api/roles`, { headers: new HttpHeaders({
            'session-token': sessionToken,
            }),
            observe: 'response',
        })
        .pipe(catchError(this.handlerError));
    }

    getUsers() {
        const sessionToken = localStorage.getItem('sessionToken');
        return this.httpClient.get(`${this.baseUrl}api/users`, { headers: new HttpHeaders({
            'session-token': sessionToken,
            }),
            observe: 'response',
        })
        .pipe(catchError(this.handlerError));
    }

    logout() {
        const sessionToken = localStorage.getItem('sessionToken');
        return this.httpClient.get(`${this.baseUrl}api/logout`, { headers: new HttpHeaders({
            'session-token': sessionToken,
            }),
            observe: 'response',
        })
        .pipe(catchError(this.handlerError));
    }

    private handlerError(errorResponse: HttpErrorResponse) {
        if (errorResponse instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                console.error('There is a problem with a internet connection');
            } else {
                if (errorResponse.status === 400) {
                    console.error('Failed Authorization');
                }
            console.error('Client Side Error: ', errorResponse.error.message);
            }
        } else {
            console.error('Server Error: ', errorResponse);
        }

        return throwError( 'There is a problem with  the service.');
    }
}
