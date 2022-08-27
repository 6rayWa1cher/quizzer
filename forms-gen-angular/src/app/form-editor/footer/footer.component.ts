import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
    selector: 'form-editor-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
} )
export class FooterComponent implements OnInit {
    @Output() create_request: EventEmitter<void> = new EventEmitter();
    @Output() close_request: EventEmitter<void> = new EventEmitter();
    @Input() closable: boolean = false;

    constructor () { }

    ngOnInit (): void {
    }
}
