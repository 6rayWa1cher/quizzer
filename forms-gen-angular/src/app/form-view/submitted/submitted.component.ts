import { Component, Input, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/types/form_response';

@Component( {
    selector: 'form-view-submitted',
    templateUrl: './submitted.component.html',
    styleUrls: ['./submitted.component.scss'],
} )
export class SubmittedComponent implements OnInit {
    @Input() form_response?: FormResponse;

    constructor () { }

    ngOnInit (): void {
    }
}
