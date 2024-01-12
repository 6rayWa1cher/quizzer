import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RestService } from '../rest.service';
import { FormDescriptionShort } from '../types/form_description_short';
import { GetAllFormsDto } from '../types/get_all_forms';

@Injectable()
export class FormsSceneService {
    update_todo_value_subject: Subject<FormDescriptionShort> = new Subject();
    sse_listeners_added: boolean = false;

    constructor ( private rest_service: RestService ) {

    }

    get_froms_short (): Promise<GetAllFormsDto> {
        return this.rest_service.send_request( undefined, 'GET', 'form' );
    }

    /**
     * Adds update_todo_value_subject subjecect emitter
     * Sse listening starts after this function called at least once
     *
     * @memberof FormsSceneService
     */
    enable_sse_listeners () {
        if ( !this.sse_listeners_added ) {
            this.sse_listeners_added = true;
            this.rest_service.add_sse_listener( 'form.created', ( { data } ) => {
                this.update_todo_value_subject.next( JSON.parse( data ) );
            } );
            // For testing, should be removed or changed for proper implementation
            this.rest_service.add_sse_listener( 'form.pending.update', ( { data } ) => {
                console.log( 'PENDING UPDATE', data );
            } );
        }
    }
}
