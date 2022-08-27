import { Prisma } from '../client';


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
