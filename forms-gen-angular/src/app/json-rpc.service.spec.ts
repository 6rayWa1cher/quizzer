import { TestBed } from '@angular/core/testing';

import { JsonRpcService } from './json-rpc.service';

describe( 'JsonRpcService', () => {
    let service: JsonRpcService;

    beforeEach( () => {
        TestBed.configureTestingModule( {} );
        service = TestBed.inject( JsonRpcService );
    } );

    it( 'should be created', () => {
        expect( service ).toBeTruthy();
    } );
} );
