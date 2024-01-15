import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
    selector: 'form-view-field-select',
    templateUrl: './field-select.component.html',
    styleUrls: ['./field-select.component.scss'],
} )
export class FieldSelectComponent implements OnInit {
    @Input() name: string = '';
    @Input() description: string = '';
    @Input() options: Array<string> = [];
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
