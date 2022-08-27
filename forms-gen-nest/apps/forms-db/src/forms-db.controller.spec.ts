import { Test, TestingModule } from '@nestjs/testing';
import { FormsDbController } from './forms-db.controller';
import { FormsDbService } from './forms-db.service';

describe( 'FormsDbController', () => {
    let formsDbController: FormsDbController;

    beforeEach( async () => {
        const app: TestingModule = await Test.createTestingModule( {
            controllers: [FormsDbController],
            providers: [FormsDbService],
        } ).compile();

        formsDbController = app.get<FormsDbController>( FormsDbController );
    } );

    describe( 'root', () => {
        it( 'should return "Hello World!"', () => {
            expect( formsDbController.getHello() ).toBe( 'Hello World!' );
        } );
    } );
} );
