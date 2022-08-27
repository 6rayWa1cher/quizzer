import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import shared_configuration from 'apps/shared_configuration';
import { RmqModule } from 'rmq/rmq';
import configuration from '../config/configuration';
import { FormsDbController } from './forms-db.controller';
import { FormsDbService } from './forms-db.service';
import { FormsModule } from './forms/forms.module';

@Module( {
    imports: [
        ConfigModule.forRoot( {
            isGlobal: true,
            cache: true,
            load: [shared_configuration, configuration]
        } ),
        FormsModule,
        RmqModule,
    ],
    controllers: [FormsDbController],
    providers: [FormsDbService],
    } )
export class FormsDbModule {}
