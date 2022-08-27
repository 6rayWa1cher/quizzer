import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormField } from 'src/app/types/form_field';

@Component( {
    selector: 'form-editor-new-field',
    templateUrl: './new-field.component.html',
    styleUrls: ['./new-field.component.scss'],
} )
export class NewFieldComponent implements OnInit {
    @Output() field_creation: EventEmitter<FormField['type']> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    click ( type: FormField['type'] ) {
        this.field_creation.emit( type );
    }
}
