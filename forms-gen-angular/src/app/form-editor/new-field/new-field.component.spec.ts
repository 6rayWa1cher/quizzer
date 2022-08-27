import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFieldComponent } from './new-field.component';

describe( 'NewFieldComponent', () => {
    let component: NewFieldComponent;
    let fixture: ComponentFixture<NewFieldComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [NewFieldComponent],
        } )
            .compileComponents();

        fixture = TestBed.createComponent( NewFieldComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
