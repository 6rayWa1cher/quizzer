import { Component, Input, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/types/form_response';

@Component( {
    selector: 'form-responses-responses-collection',
    templateUrl: './responses-collection.component.html',
    styleUrls: ['./responses-collection.component.scss'],
} )
export class ResponsesCollectionComponent implements OnInit {
    @Input() responses: Array<FormResponse> = [];

    constructor () { }

    ngOnInit (): void {
    }
}
