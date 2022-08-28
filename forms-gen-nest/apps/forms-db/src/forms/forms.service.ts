import { Injectable } from '@nestjs/common';
import { CreateFormDto } from 'apps/forms-rest/src/forms/dto/create_form.dto';
import * as _ from 'lodash';
import { CompleteForm, CompleteFormResponse, PrismaFormsService, ShortForm } from 'prisma-forms/prisma-forms';
import { Prisma } from '@internal/prisma-forms/client';
import { CreateFormResponseDto } from 'apps/forms-rest/src/forms/dto/create_form_response.dto';

@Injectable()
export class FormsService {
    constructor ( private prisma: PrismaFormsService ) { }

    async get_all_responses ( form_id: number ): Promise<Array<CompleteFormResponse>> {
        return this.prisma.formResponse.findMany( {
            where: {
                form_id,
            },
            orderBy: {
                id: 'asc',
            },
            include: {
                fields: {
                    orderBy: {
                        form_field: {
                            id: 'asc',
                        },
                    },
                    include: {
                        form_field: true,
                    },
                },
            },
        } );
    }

    /**
     * Creates form response. Skips fields which are not present on the form with corresponding id
     * Returns null if form not found
     *
     * @param {number} form_id
     * @param {CreateFormResponseDto} create_form_response_dto
     * @memberof FormsService
     */
    async create_response ( form_id: number, create_form_response_dto: CreateFormResponseDto ): Promise<CompleteFormResponse | null> {
        return this.prisma.$transaction( async ( prisma ) => {
            const form = await prisma.form.findUnique( {
                where: {
                    id: form_id,
                },
                include: {
                    fields: true,
                },
            } );

            if ( form == null ) {
                return null;
            }

            const intersection_fields = _.intersectionBy(
                create_form_response_dto.fields,
                _.map( form.fields, ( val ) => {
                    return {
                        form_field_id: val.id,
                        data: '',
                    };
                } ),
                'form_field_id',
            );

            const fields_to_create = _.map( intersection_fields, ( val ) => {
                return {
                    form_field: {
                        connect: {
                            id_form_id: {
                                id: val.form_field_id,
                                form_id: form.id,
                            },
                        },
                    },
                    data: val.data,
                };
            } );

            return prisma.formResponse.create( {
                data: {
                    form: {
                        connect: {
                            id: form.id,
                        },
                    },
                    fields: {
                        create: fields_to_create,
                    },
                },
                include: {
                    fields: {
                        orderBy: {
                            form_field: {
                                id: 'asc',
                            },
                        },
                        include: {
                            form_field: true,
                        },
                    },
                },
            } );
        } );
    }

    async get_form_by_id ( form_id: number ): Promise<CompleteForm | null> {
        return this.prisma.form.findUnique( {
            where: {
                id: form_id,
            },
            include: {
                fields: {
                    orderBy: {
                        // ordering by autoinrement field so fields in same order as they were inserted.
                        // Later seperate sort_order field might be added
                        id: 'asc',
                    },
                    include: {
                        options: {
                            orderBy: {
                                // ordering by autoinrement field so fields in same order as they were inserted.
                                // Later seperate sort_order field might be added
                                id: 'asc',
                            },
                        },
                    },
                },
            },
        } );
    }

    async get_all_forms (): Promise<Array<ShortForm>> {
        return this.prisma.form.findMany( {
            orderBy: {
                name: 'asc',
            },
        } );
    }

    async create_form ( create_form_dto: CreateFormDto ): Promise<CompleteForm> {
        return this.prisma.form.create( {
            data: {
                name: create_form_dto.name,
                description: create_form_dto.description,
                fields: {
                    create: _.map( create_form_dto.fields, ( form_field ) => {
                        const ret: Prisma.FormCreateArgs['data']['fields']['create'] = {
                            name: form_field.name,
                            description: form_field.description,
                            type: form_field.type,

                        };
                        if ( form_field.type === 'select' ) {
                            ret.options = {
                                create: _.map( form_field.options, ( form_field_option ) => {
                                    return {
                                        value: form_field_option,
                                    };
                                } ),
                            };
                        }
                        return ret;
                    } ),
                },
            },
            include: {
                fields: {
                    orderBy: {
                        // ordering by autoinrement field so fields in same order as they were inserted.
                        // Later seperate sort_order field might be added
                        id: 'asc',
                    },
                    include: {
                        options: {
                            orderBy: {
                                // ordering by autoinrement field so fields in same order as they were inserted.
                                // Later seperate sort_order field might be added
                                id: 'asc',
                            },
                        },
                    },
                },
            },
        } );
    }
}
