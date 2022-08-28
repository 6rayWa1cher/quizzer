import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { CreateFormDto } from '../types/create_form_dto';

@Injectable()
export class FormEditorService {
    constructor ( private rest_service: RestService ) { }

    create_form ( create_from_dto: CreateFormDto ) {
        return this.rest_service.send_request( create_from_dto, 'POST', 'form' );
    }
}
