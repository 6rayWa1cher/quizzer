import { Injectable } from '@nestjs/common';
import { CreateFormDto } from 'apps/forms-rest/src/forms/dto/create_form.dto';
import * as _ from 'lodash';
import { CompleteForm, CompleteFormResponse, PrismaFormsService, PendingForm } from 'prisma-forms/prisma-forms';
import { Prisma } from '@internal/prisma-forms/client';
import { CreateFormResponseDto } from 'apps/forms-rest/src/forms/dto/create_form_response.dto';
import { GenerateFormDto } from 'apps/forms-rest/src/forms/dto/generate_form.dto';
import { GenerationUpdateDto } from '../dto/generation_from_update.dto';
import { GenerationCompleteDto } from '../dto/generation_from_complete.dto';
import { AllFormsShortDto } from '../dto/all_forms_short.dto';
import { GetFormByIdDto } from 'apps/forms-rest/src/forms/dto/get_form_by_id.dto';

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

            const intersection_fields = _( create_form_response_dto.fields as any ).concat(
                _.map( form.fields, ( val ) => {
                    return {
                        form_field_id: val.id,
                        correct_answer: val.correct_answer,
                    };
                } ),
            ).groupBy( 'form_field_id' ).reject( { length: 1 } as any ).map( _.spread( _.merge ) ).value() as any;

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
                    correct_answer: val.correct_answer,
                };
            } );

            const inserted_fields = await prisma.formResponse.create( {
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
                            form_field: {
                                include: {
                                    options: true,
                                },
                            },
                        },
                    },
                },
            } );

            return inserted_fields;
        } );
    }

    async get_form_by_id ( get_form_by_id_dto: GetFormByIdDto ): Promise<CompleteForm | null> {
        const form = await this.prisma.form.findUnique( {
            where: {
                id: get_form_by_id_dto.id,
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

        if ( !get_form_by_id_dto.include_correct_answers ) {
            form.fields = _.map( form.fields, ( field ) => {
                field.correct_answer = undefined;
                return field;
            } );
        }

        return form;
    }

    async get_all_forms (): Promise<AllFormsShortDto> {
        const forms = this.prisma.form.findMany( {
            orderBy: {
                id: 'asc',
            },
        } );
        const pending_forms = this.prisma.pendingForm.findMany( {
            orderBy: {
                id: 'asc',
            },
        } );

        return new AllFormsShortDto( await forms, await pending_forms );
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

    async generate_form ( generate_form_dto: GenerateFormDto ): Promise<PendingForm> {
        return this.prisma.pendingForm.create( {
            data: {
                name: generate_form_dto.name,
                prompt: generate_form_dto.prompt,
                questions_count: generate_form_dto.questions_count,
            },
        } );
    }

    async generation_update ( generation_update_dto: GenerationUpdateDto ): Promise<PendingForm> {
        return this.prisma.pendingForm.update( {
            data: {
                questions_done: generation_update_dto.questions_done,
            },
            where: {
                id: generation_update_dto.id,
            },
        } );
    }

    async generation_complete ( generation_complete_dto: GenerationCompleteDto ): Promise<CompleteForm> {
        return this.prisma.$transaction( async ( prisma ) => {
            const pending_form = await prisma.pendingForm.delete( {
                    where: {
                        id: generation_complete_dto.id,
                    },
            } );

            return prisma.form.create( {
                data: {
                    name: pending_form.name,
                    description: pending_form.prompt,
                    fields: {
                        create: _.map( generation_complete_dto.questions, ( question ) => {
                            const ret: Prisma.FormCreateArgs['data']['fields']['create'] = {
                                name: question.question,
                                description: '',
                                type: 'select',
                                correct_answer: question.correct_answer,

                            };
                            ret.options = {
                                create: _.map( question.answers, ( answer ) => {
                                    return {
                                        value: answer,
                                    };
                                } ),
                            };
                            return ret;
                        } ),
                    },
                    pending_id: generation_complete_dto.id,
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
        } );
    }
}
