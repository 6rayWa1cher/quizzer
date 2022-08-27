import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component( {
    selector: 'form-view-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
} )
export class LoaderComponent implements OnInit, OnDestroy {
    form_id!: number;
    param_subscription!: Subscription;

    constructor ( private route: ActivatedRoute ) { }

    ngOnInit (): void {
        this.param_subscription = this.route.paramMap.subscribe( ( params ) => {
            this.form_id = parseInt( params.get( 'id' ) || '' );
        } );
    }

    ngOnDestroy (): void {
        this.param_subscription.unsubscribe();
    }
}
