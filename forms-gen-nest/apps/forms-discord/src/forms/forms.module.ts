import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { RmqModule } from 'rmq/rmq';

@Module( {
    imports: [RmqModule],
    providers: [FormsService],
    controllers: [FormsController]
} )
export class FormsModule { }
