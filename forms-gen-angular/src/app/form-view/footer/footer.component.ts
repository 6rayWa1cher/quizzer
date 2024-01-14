import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
    selector: 'form-view-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
} )
export class FooterComponent implements OnInit {
    @Output() create_request: EventEmitter<void> = new EventEmitter();
    @Output() close_request: EventEmitter<void> = new EventEmitter();
    @Output() delete_request: EventEmitter<void> = new EventEmitter();
    @Input() closable: boolean = false;
    @Input() can_be_deleted: boolean = false;

    constructor () { }

    ngOnInit (): void {
    }
}
