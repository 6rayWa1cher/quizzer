import { FormField } from './form_field';

export interface Form {
    id: number,
    name: string,
    description: string,
    fields: Array<FormField>,
    created_at: Date,
}
