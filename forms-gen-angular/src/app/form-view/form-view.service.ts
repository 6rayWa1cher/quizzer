import { Injectable } from '@angular/core';
import { JsonRpcService } from '../json-rpc.service';
import { Form } from '../types/form';
import { FormFieldResponse } from '../types/form_field_response';

@Injectable()
export class FormViewService {
    constructor ( private json_rpc_service: JsonRpcService ) { }

    async submit_form ( fields: Array<FormFieldResponse>, form_id: number ) {
        return this.json_rpc_service.send_request( {
            form_id: form_id,
            fields: fields,
        }, 'responses' );
    }

    async get_form_by_id ( form_id: number ): Promise<Form> {
        return this.json_rpc_service.send_request( { id: form_id }, 'forms.get_by_id' ).then( ( val ) => {
            val.created_at = new Date( val.created_at );
            return val;
        } );
    }
}
