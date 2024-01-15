import { FormDescriptionShort } from './form_description_short';
import { PendingFormDto } from './pending_form_dto';

export class GetAllFormsDto {
    forms: Array<FormDescriptionShort>;

    pending_forms: Array<PendingFormDto>;
}
