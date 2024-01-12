import { FormDescriptionShort } from './form_description_short';

export class GetAllFormsDto {
    forms: Array<FormDescriptionShort>;

    // TODO: fill proper type
    pending_forms: Array<undefined>;
}
