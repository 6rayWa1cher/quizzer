import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { lastValueFrom } from 'rxjs';
import { FormDescriptionShort } from 'src/app/types/form_description_short';
import { FormEditorWrapperComponent } from '../form-editor-wrapper/form-editor-wrapper.component';
import { FormsSceneService } from '../forms-scene.service';
import { PendingFormDto } from 'src/app/types/pending_form_dto';

@Component( {
    selector: 'forms-scene-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    forms_list_short: Array<FormDescriptionShort> = [];
    pending_forms_list: Array<PendingFormDto> = [];
    loading: boolean = true;
    test: boolean = false;
    @ViewChild( 'button_create' ) button_create!: any;

    selected_id: number | undefined = 0;

    constructor (
        private dialog: MatDialog,
        private forms_scene_service: FormsSceneService,
        private changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit (): void {
        this.forms_scene_service
            .get_froms_short()
            .then( ( val ) => {
                console.log( val );
                this.forms_list_short = val.forms;
                this.pending_forms_list = val.pending_forms;
                this.forms_scene_service.enable_sse_listeners();
                this.forms_scene_service.update_todo_value_subject.subscribe( {
                    next: ( val ) => {
                        console.log( 'Form added', val );
                        this.push_form( val );
                        this.pending_forms_list = this.pending_forms_list.filter( ( pending_form ) => pending_form.id !== val.pending_id );
                        this.changeDetectorRef.detectChanges();
                    },
                } );
                this.forms_scene_service.update_pending_form_subject.subscribe( {
                    next: ( val ) => {
                        console.log( 'Pending form update received', val );
                        const index = _.findIndex( this.pending_forms_list, ['id', val.id] );
                        this.pending_forms_list[index >= 0 ? index : this.pending_forms_list.length] = val;
                        this.changeDetectorRef.detectChanges();
                    },
                } );
                console.log( 'meow' + this.pending_forms_list );
            } )
            .finally( () => {
                this.loading = false;
            } );
    }

    calculatePercent ( form: PendingFormDto ): number {
        return _.toInteger( form.questions_done / form.questions_count * 100 );
    }

    push_form ( form: FormDescriptionShort ) {
        this.forms_list_short.push( form );
    }

    create_new_form () {
        lastValueFrom(
            this.dialog
                .open( FormEditorWrapperComponent, {
                    width: '90%',
                    position: { top: '5vh' },
                    maxHeight: '90vh',
                } )
                .afterClosed(),
        ).then( () => {
            // this.forms_scene_service.get_froms_short().then( ( val ) => {
            //     this.forms_list_short = val;
            // } );
        } );
    }

    selection_change ( val: number | undefined ) {
        // Trick to rerender form view
        this.selected_id = undefined;
        setTimeout( () => {
            this.selected_id = val;
        }, 1 );
    }
}
