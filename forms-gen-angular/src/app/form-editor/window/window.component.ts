import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateFormDto } from 'src/app/types/create_form_dto';
import { FormEditorService } from '../form-editor.service';
@Component( {
    selector: 'form-editor-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss'],
} )
export class WindowComponent implements OnInit {
    @Input() closable: boolean = false;

    @Output() close_request: EventEmitter<void> = new EventEmitter();

    form: CreateFormDto = {
        name: '',
        description: '',
        fields: [],
    };

    constructor ( private form_editor_service: FormEditorService ) { }

    ngOnInit (): void {
    }

    close_editor () {
        this.close_request.emit();
    }

    create_form () {
        this.form_editor_service.create_form( this.form ).then( () => {
            this.close_editor();
        } );
    }
}
