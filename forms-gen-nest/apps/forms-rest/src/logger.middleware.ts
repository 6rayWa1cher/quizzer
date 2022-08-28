import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger( LoggerMiddleware.name );

    use ( req: Request, res: Response, next: NextFunction ) {
        const method = req.method;
        const url = req.baseUrl = req.baseUrl;
        const cont_length = req.headers['content-length'] || 0;
        this.logger.log( `${method} ${url} ${cont_length}` );
        next();
    }
}
