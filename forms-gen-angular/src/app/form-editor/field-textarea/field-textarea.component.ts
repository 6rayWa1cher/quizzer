import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
    selector: 'form-editor-field-textarea',
    templateUrl: './field-textarea.component.html',
    styleUrls: ['./field-textarea.component.scss'],
} )
export class FieldTextareaComponent implements OnInit {
    @Input() name: string = '';
    @Output() nameChange: EventEmitter<string> = new EventEmitter();

    @Input() description: string = '';
    @Output() descriptionChange: EventEmitter<string> = new EventEmitter();

    @Output() close_request: EventEmitter<void> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    name_update ( new_name: string ) {
        this.nameChange.emit( new_name );
    }

    description_update ( new_description: string ) {
        this.descriptionChange.emit( new_description );
    }

    close_click () {
        this.close_request.emit();
    }
}
