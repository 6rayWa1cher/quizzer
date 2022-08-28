import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable( {
    providedIn: 'root',
} )
export class RestService {
    constructor ( private snack_bar: MatSnackBar ) { }

    send_request ( data: any, method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string ) {
        return axios( {
            method,
            baseURL: environment.api_url,
            url: path,
            data,
        } )
            .then( ( res ) => {
                return res.data;
            } )
            .catch( ( err ) => {
                this.snack_bar.open( `Error occured while sending request ${err?.response?.status || ''}`, 'close', {
                    duration: 5000,
                } );
                console.log( err );
                throw err;
            } );
    }
}
