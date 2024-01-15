import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFormEditorWrapperComponent } from './generate-form-editor-wrapper.component';

describe( 'GenerateFormEditorWrapperComponent', () => {
    let component: GenerateFormEditorWrapperComponent;
    let fixture: ComponentFixture<GenerateFormEditorWrapperComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [GenerateFormEditorWrapperComponent],
        } )
            .compileComponents();

        fixture = TestBed.createComponent( GenerateFormEditorWrapperComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
