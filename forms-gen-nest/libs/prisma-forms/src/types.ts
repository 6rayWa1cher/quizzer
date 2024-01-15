import { Prisma, PrismaClient } from '@internal/prisma-forms/client';


const complete_from = Prisma.validator<Prisma.FormArgs>()( {
    include: {
        fields: {
            include: {
                options: true,
            },
        },
    },
} );

export type CompleteForm = Prisma.FormGetPayload<typeof complete_from>

const short_from = Prisma.validator<Prisma.FormArgs>()( {} );

export type ShortForm = Prisma.FormGetPayload<typeof short_from>

const complete_from_response = Prisma.validator<Prisma.FormResponseArgs>()( {
    include: {
        fields: {
            include: {
                form_field: true,
            },
        },
    },
} );


export type CompleteFormResponse = Prisma.FormResponseGetPayload<typeof complete_from_response>

const pending_form = Prisma.validator<Prisma.PendingFormArgs>()( {} );

export type PendingForm = Prisma.PendingFormGetPayload<typeof pending_form>

export type FormStatus = CompleteForm['form_status'];

// export type FormField = CompleteForm['fields'][0]

// export type FormFieldWithGivenResponse = FormField & { given_answer: string };

// export type CompleteFormWithResponse = Omit<CompleteForm, 'fields'> & {fields: FormFieldWithGivenResponse};
