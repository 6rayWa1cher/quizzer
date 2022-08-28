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
