import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

@Component( {
    selector: 'form-editor-field-select',
    templateUrl: './field-select.component.html',
    styleUrls: ['./field-select.component.scss'],
} )
export class FieldSelectComponent implements OnInit {
    @Input() name: string = '';
    @Output() nameChange: EventEmitter<string> = new EventEmitter();

    @Input() description: string = '';
    @Output() descriptionChange: EventEmitter<string> = new EventEmitter();

    options: Array<{data: string}> = [];
    @Output() optionsChange: EventEmitter<Array<string>> = new EventEmitter();

    @Output() close_request: EventEmitter<void> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    append_option () {
        this.options.push( { data: '' } );
        this.options_update();
    }

    remove_option ( i: number ) {
        this.options.splice( i, 1 );
    }

    name_update ( new_name: string ) {
        this.nameChange.emit( new_name );
    }

    description_update ( new_description: string ) {
        this.descriptionChange.emit( new_description );
    }

    options_update () {
        this.optionsChange.emit( _.map( this.options, ( elem ) => elem.data ) );
    }

    close_click () {
        this.close_request.emit();
    }
}
