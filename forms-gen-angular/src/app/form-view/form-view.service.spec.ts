import { TestBed } from '@angular/core/testing';

import { FormViewService } from './form-view.service';

describe( 'FormViewService', () => {
    let service: FormViewService;

    beforeEach( () => {
        TestBed.configureTestingModule( {} );
        service = TestBed.inject( FormViewService );
    } );

    it( 'should be created', () => {
        expect( service ).toBeTruthy();
    } );
} );
