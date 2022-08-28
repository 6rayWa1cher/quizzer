import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import shared_configuration from 'apps/shared_configuration';
import configuration from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';
import { LoggerMiddleware } from './logger.middleware';

@Module( {
    imports: [
        ConfigModule.forRoot( {
            isGlobal: true,
            cache: true,
            load: [shared_configuration, configuration]
        } ),
        FormsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
} )
export class AppModule implements NestModule {
    configure ( consumer: MiddlewareConsumer ) {
        consumer.apply( LoggerMiddleware ).forRoutes( '*' );
    }
}
