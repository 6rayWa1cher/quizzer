import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsCollectionComponent } from './fields-collection.component';

describe( 'FieldsCollectionComponent', () => {
    let component: FieldsCollectionComponent;
    let fixture: ComponentFixture<FieldsCollectionComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [FieldsCollectionComponent],
        } )
            .compileComponents();

        fixture = TestBed.createComponent( FieldsCollectionComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
