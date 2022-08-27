import { Module } from '@nestjs/common';
import { RmqModule } from 'rmq/rmq';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';

@Module( {
    imports: [RmqModule],
    providers: [FormsService],
    controllers: [FormsController]
} )
export class FormsModule { }
