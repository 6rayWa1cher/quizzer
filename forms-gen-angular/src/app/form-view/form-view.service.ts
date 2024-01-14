import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { Form } from '../types/form';
import { FormFieldResponse } from '../types/form_field_response';

@Injectable()
export class FormViewService {
    constructor ( private rest_service: RestService ) { }

    async submit_form ( fields: Array<FormFieldResponse>, form_id: number ) {
        return this.rest_service.send_request(
            {
                fields: fields,
            },
            'POST',
            `form/${form_id}/response`,
        );
    }

    async get_form_by_id ( form_id: number, is_admin: boolean ): Promise<Form> {
        return this.rest_service.send_request( undefined, 'GET', `form/${form_id}`, { 'include_correct_answer': is_admin } )
            .then( ( val ) => {
                val.created_at = new Date( val.created_at );
                return val;
            } );
    }

    async delete_form_by_id ( form_id: number ): Promise<Form> {
        return this.rest_service.send_request( undefined, 'DELETE', `form/${form_id}` );
    }
}
