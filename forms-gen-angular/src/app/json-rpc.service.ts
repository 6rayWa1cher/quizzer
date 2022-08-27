import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import axios from 'axios';
import { environment } from 'src/environments/environment';


@Injectable( {
    providedIn: 'root',
} )
export class JsonRpcService {
    id: number = 0;

    constructor ( private snack_bar: MatSnackBar ) { }

    send_request ( data: any, method: string ) {
        return axios( {
            method: 'POST',
            baseURL: environment.api_url,
            url: 'json-rpc',
            data: {
                jsonrpc: '2.0',
                method: method,
                params: data,
                id: this.id++,
            },
        } )
            .then( ( res ) => {
                return res.data.result;
            } )
            .catch( ( err ) => {
                this.snack_bar.open( 'Error occured while sending request', 'close', {
                    duration: 5000,
                } );
                console.log( err );
                throw err;
            } );
    }
}
