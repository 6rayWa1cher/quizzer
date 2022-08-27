import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesCollectionComponent } from './responses-collection.component';

describe( 'ResponsesCollectionComponent', () => {
    let component: ResponsesCollectionComponent;
    let fixture: ComponentFixture<ResponsesCollectionComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            declarations: [ResponsesCollectionComponent],
        } )
            .compileComponents();

        fixture = TestBed.createComponent( ResponsesCollectionComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
