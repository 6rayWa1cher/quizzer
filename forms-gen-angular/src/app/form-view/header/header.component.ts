import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component( {
    selector: 'form-view-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
} )
export class HeaderComponent implements OnInit {
    @Input() name: string = '';
    @Input() description: string = '';
    @Input() created_at: Date = new Date();
    @Input() id!: number;

    share_base_url = environment.share_base_url;

    constructor () { }

    ngOnInit (): void {
    }
}
