import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable( {
    providedIn: 'root',
} )
export class RestService {
    private event_source!: EventSource;
    private pending_sse_listeners: Array<{ type: string, listener: ( this: EventSource, event: MessageEvent<any> ) => any }> = [];
    private sse_called: boolean = false;

    constructor ( private snack_bar: MatSnackBar ) {
        // this.add_sse_listener( 'count', ( data ) => {
        //     console.log( 'New message', data );
        // } );
    }

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

    private connect_sse () {
        if ( this.event_source ) {
            this.event_source.close();
        }
        this.event_source = new EventSource( environment.api_url + '/sse' );
        this.event_source.onopen = () => {
            console.debug( 'SSE OPENED' );
            for ( const el of this.pending_sse_listeners ) {
                this.event_source.addEventListener( el.type, el.listener );
            }
            this.pending_sse_listeners = [];
        };
        this.event_source.onerror = ( ( ev: Event ) => {
            console.log( 'Sse error', ev, this );
            setTimeout( this.connect_sse, 1000 );
        } );
    }

    /**
     * Recommended to use only in singletons since i didint bother to make function for removing listeners
     * Sse listening starts after this function called at least once
     *
     * @param {string} type
     * @param {( this: EventSource, event: MessageEvent<any> ) => any} listener
     * @memberof RestService
     */
    add_sse_listener ( type: string, listener: ( this: EventSource, event: MessageEvent<any> ) => any ) {
        if ( !this.sse_called ) { // to make sure sse used only if there are listneres since number of open requests is limited
            this.sse_called = true;
            this.connect_sse();
        }
        if ( this.event_source && this.event_source.readyState === this.event_source.OPEN ) {
            this.event_source.addEventListener( type, listener );
        } else {
            this.pending_sse_listeners.push( { type, listener } );
        }
    }
}
