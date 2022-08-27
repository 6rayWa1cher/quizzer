import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, INestApplication, ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

export function setup_swagger ( app: INestApplication ) {
    const config = new DocumentBuilder()
        .setTitle( 'forms-gen-nest' )
        .setDescription( 'Api descciption of forms-gen-nest, project build to get familiar with microservices. ' +
            'It provides cut version of google forms. More on https://github.com/Alstrasz/forms-gen-microservices.' )
        .setVersion( '0.0.1' )
        .addTag( 'App' )
        .build();
    const document = SwaggerModule.createDocument( app, config );
    SwaggerModule.setup( 'api', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    } );
}

export function apply_middleware ( app: INestApplication ) {
    app.useGlobalPipes( new ValidationPipe( {
        whitelist: true,
    } ) );

    app.useGlobalInterceptors( new ClassSerializerInterceptor( new Reflector() ) );

    app.enableCors();
}


async function bootstrap () {
    const app = await NestFactory.create( AppModule,
        {
            logger: ['log', 'error', 'warn', 'debug', 'verbose'],
        } );


    const config_service = app.get( ConfigService );

    apply_middleware( app );

    setup_swagger( app );

    const port = config_service.get<number>( 'port', 3000 );
    const host = config_service.get<string>( 'host', '0.0.0.0' );

    await app.listen( port, host, () => {
        console.log( 'App listening at ', port, host );
    } );
}
bootstrap();
