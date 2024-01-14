import { FormStatus } from './form';

export interface FormDescriptionShort {
    id: number,
    name: string,
    description: string,
    form_status: FormStatus,
    pending_id?: string,
}
