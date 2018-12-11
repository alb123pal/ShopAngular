import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError, Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {}
    baseUrl = 'http://localhost:3000/';

    authorizationUser(login: string, password: string) {
        const params = {
            login: 'frank',
            password: 'frank123'
        };
        // const params = new URLSearchParams();
        // params.set('login', login);
        // params.set('password', password);

        return this.httpClient.post(`${this.baseUrl}api/login`,
            params, { headers: new HttpHeaders({
                        'content-type': 'application/json',
                        // 'Authorization': 'session-token',
                        // 'Access-Control-Allow-Origin' : '*',
                        // 'Access-Control-Allow-Methods' : 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
                        // 'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type, sesion-token'
                }),
                responseType: 'text',
                observe: 'response' as 'body',
                // withCredentials: true
        })
        .subscribe((res) => {
            console.log(res);
            // let payload = res.json();
            let headers = res.headers;
        });
        // .pipe(catchError(this.handlerError));
    }

    private handlerError(errorResponse: HttpErrorResponse) {
        console.log(errorResponse);
        if (errorResponse instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                console.error('There is a problem with a internet connection');
            } else {
                if (errorResponse.status === 400) {
                    console.error('400:', errorResponse);
                }
            console.error('Client Side Error: ', errorResponse.error.message);
            }
        } else {
            console.error('Server Error: ', errorResponse);
        }

        return throwError( 'There is a problem with  the service.');
    }
}
