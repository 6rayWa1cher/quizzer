import { Module } from '@nestjs/common';
import { FormsDbController } from './forms-db.controller';
import { FormsDbService } from './forms-db.service';

@Module( {
    imports: [],
    controllers: [FormsDbController],
    providers: [FormsDbService],
    } )
export class FormsDbModule {}
