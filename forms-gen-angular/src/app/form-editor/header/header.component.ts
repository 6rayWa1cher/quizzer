import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
    selector: 'form-editor-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
} )
export class HeaderComponent implements OnInit {
    @Input() name: string = '';
    @Output() nameChange: EventEmitter<string> = new EventEmitter();

    @Input() description: string = '';
    @Output() descriptionChange: EventEmitter<string> = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    name_update ( new_name: string ) {
        this.nameChange.emit( new_name );
    }

    description_update ( new_description: string ) {
        this.descriptionChange.emit( new_description );
    }
}
