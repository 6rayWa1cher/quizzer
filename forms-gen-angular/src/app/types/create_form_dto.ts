import { FormField } from './form_field';

export interface CreateFormDto {
    name: string,
    description: string,
    fields: Array<FormField>,
}
