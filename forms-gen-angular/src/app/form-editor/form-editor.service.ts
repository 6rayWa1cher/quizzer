import { Injectable } from '@angular/core';
import { JsonRpcService } from '../json-rpc.service';
import { CreateFormDto } from '../types/create_form_dto';

@Injectable()
export class FormEditorService {
    constructor ( private json_rpc_service: JsonRpcService ) { }

    create_form ( create_from_dto: CreateFormDto ) {
        return this.json_rpc_service.send_request( create_from_dto, 'forms' );
    }
}
