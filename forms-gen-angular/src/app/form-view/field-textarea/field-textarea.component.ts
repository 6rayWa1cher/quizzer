import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
    selector: 'form-view-field-textarea',
    templateUrl: './field-textarea.component.html',
    styleUrls: ['./field-textarea.component.scss'],
} )
export class FieldTextareaComponent implements OnInit {
    @Input() name: string = '';
    @Input() description: string = '';

    @Input() data: string = '';
    @Output() dataChange: EventEmitter<string> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    data_update ( new_data: string ) {
        this.dataChange.emit( new_data );
    }
}
