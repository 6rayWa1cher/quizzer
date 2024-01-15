import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFormEditorComponent } from './generate-form-editor.component';

describe( 'GenerateFormEditorComponent', () => {
    let component: GenerateFormEditorComponent;
    let fixture: ComponentFixture<GenerateFormEditorComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [GenerateFormEditorComponent],
        } )
            .compileComponents();

        fixture = TestBed.createComponent( GenerateFormEditorComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
