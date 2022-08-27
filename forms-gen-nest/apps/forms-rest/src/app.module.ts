import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';

@Module( {
    imports: [FormsModule],
    controllers: [AppController],
    providers: [AppService],
    } )
export class AppModule {}
