import { PendingForm, ShortForm } from 'prisma-forms/prisma-forms';

export class AllFormsShortDto {
    forms: Array<ShortForm>;
    pending_forms: Array<PendingForm>;

    constructor ( forms: Array<ShortForm>, pending_forms: Array<PendingForm> ) {
        this.forms = forms;
        this.pending_forms = pending_forms;
    }
}
