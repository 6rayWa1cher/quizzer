import { Injectable } from '@angular/core';
import { JsonRpcService } from '../json-rpc.service';
import { FormDescriptionShort } from '../types/form_description_short';

@Injectable()
export class FormsSceneService {
    constructor ( private json_rpc_service: JsonRpcService ) { }

    get_froms_short (): Promise<Array<FormDescriptionShort>> {
        return this.json_rpc_service.send_request( undefined, 'forms.short' );
    }
}
