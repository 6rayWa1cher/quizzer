import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { RestService } from '../rest.service';
import { FormResponse } from '../types/form_response';

@Injectable()
export class FormResponsesService {
    constructor ( private rest_service: RestService ) { }

    async get_responses_by_form_id ( id: number ): Promise<Array<FormResponse>> {
        return this.rest_service.send_request( undefined, 'GET', `form/${id}/response` )
            .then( ( val ) => {
                _.map( val, ( elem ) => {
                    elem.created_at = new Date( elem.created_at );
                } );
                return val;
            } );
    }
}
