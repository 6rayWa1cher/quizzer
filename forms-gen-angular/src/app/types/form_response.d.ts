import { FormFieldResponse } from './form_field_response';

export interface FormResponse {
    id: number;
    form_id: number;
    created_at: Date,
    fields: Array<FormFieldResponse>
}
