import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { FormDescriptionShort } from '../types/form_description_short';

@Injectable()
export class FormsSceneService {
    constructor ( private rest_service: RestService ) { }

    get_froms_short (): Promise<Array<FormDescriptionShort>> {
        return this.rest_service.send_request( undefined, 'GET', 'form' );
    }
}
