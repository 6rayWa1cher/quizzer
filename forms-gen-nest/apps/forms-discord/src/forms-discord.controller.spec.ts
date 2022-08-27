import { Test, TestingModule } from '@nestjs/testing';
import { FormsDiscordController } from './forms-discord.controller';
import { FormsDiscordService } from './forms-discord.service';

describe( 'FormsDiscordController', () => {
    let formsDiscordController: FormsDiscordController;

    beforeEach( async () => {
        const app: TestingModule = await Test.createTestingModule( {
            controllers: [FormsDiscordController],
            providers: [FormsDiscordService],
        } ).compile();

        formsDiscordController = app.get<FormsDiscordController>( FormsDiscordController );
    } );

    describe( 'root', () => {
        it( 'should return "Hello World!"', () => {
            expect( formsDiscordController.getHello() ).toBe( 'Hello World!' );
        } );
    } );
} );
