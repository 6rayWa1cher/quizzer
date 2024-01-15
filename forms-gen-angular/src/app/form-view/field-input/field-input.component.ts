import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
    selector: 'form-view-field-input',
    templateUrl: './field-input.component.html',
    styleUrls: ['./field-input.component.scss'],
} )
export class FieldInputComponent implements OnInit {
    @Input() name: string = '';
    @Input() description: string = '';
    @Input() correct_answer?: string;

    @Input() data: string = '';
    @Output() dataChange: EventEmitter<string> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    data_update ( new_data: string ) {
        this.dataChange.emit( new_data );
    }
}
