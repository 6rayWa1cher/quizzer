import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { JsonRpcService } from '../json-rpc.service';
import { FormResponse } from '../types/form_response';

@Injectable()
export class FormResponsesService {
    constructor ( private json_rpc_service: JsonRpcService ) { }

    async get_responses_by_form_id ( id: number ): Promise<Array<FormResponse>> {
        return this.json_rpc_service.send_request( { id }, 'responses.get_by_id' ).then( ( val ) => {
            _.map( val, ( elem ) => {
                elem.created_at = new Date( elem.created_at );
            } );
            return val;
        } );
    }
}
