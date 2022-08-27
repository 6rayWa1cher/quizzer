import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorWrapperComponent } from './form-editor-wrapper.component';

describe( 'FormEditorWrapperComponent', () => {
    let component: FormEditorWrapperComponent;
    let fixture: ComponentFixture<FormEditorWrapperComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [FormEditorWrapperComponent],
        } )
            .compileComponents();

        fixture = TestBed.createComponent( FormEditorWrapperComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
