import { FormField } from './form_field';

export type FormStatus = 'ok' |'deleted';

export interface Form {
    id: number,
    name: string,
    description: string,
    fields: Array<FormField>,
    pending_id?: string,
    form_status: FormStatus,
    created_at: Date,
}
