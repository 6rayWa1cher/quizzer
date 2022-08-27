import { TestBed } from '@angular/core/testing';

import { FormsSceneService } from './forms-scene.service';

describe( 'FormsSceneService', () => {
    let service: FormsSceneService;

    beforeEach( () => {
        TestBed.configureTestingModule( {} );
        service = TestBed.inject( FormsSceneService );
    } );

    it( 'should be created', () => {
        expect( service ).toBeTruthy();
    } );
} );
