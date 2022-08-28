import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { FormDescriptionShort } from 'src/app/types/form_description_short';
import { FormEditorWrapperComponent } from '../form-editor-wrapper/form-editor-wrapper.component';
import { FormsSceneService } from '../forms-scene.service';

@Component( {
    selector: 'forms-scene-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    forms_list_short: Array<FormDescriptionShort> = [];
    loading: boolean = true;

    selected_id: number | undefined = 0;

    constructor (
        private dialog: MatDialog,
        private forms_scene_service: FormsSceneService,
    ) { }

    ngOnInit (): void {
        this.forms_scene_service.get_froms_short()
            .then( ( val ) => {
                console.log( val );
                this.forms_list_short = val;
            } )
            .finally( () => {
                this.loading = false;
            } );
    }

    create_new_form () {
        lastValueFrom( this.dialog.open( FormEditorWrapperComponent, {
            width: '90%',
            position: { top: '5vh' },
            maxHeight: '90vh',
        } ).afterClosed() ).then( () => {
            this.forms_scene_service.get_froms_short().then( ( val ) => {
                this.forms_list_short = val;
            } );
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
