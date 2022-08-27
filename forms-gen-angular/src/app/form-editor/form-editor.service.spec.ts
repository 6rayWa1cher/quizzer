import { TestBed } from '@angular/core/testing';

import { FormEditorService } from './form-editor.service';

describe( 'FormEditorService', () => {
    let service: FormEditorService;

    beforeEach( () => {
        TestBed.configureTestingModule( {} );
        service = TestBed.inject( FormEditorService );
    } );

    it( 'should be created', () => {
        expect( service ).toBeTruthy();
    } );
} );
