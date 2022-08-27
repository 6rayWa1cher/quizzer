import { Injectable } from '@nestjs/common';

@Injectable()
export class FormsDbService {
    getHello (): string {
        return 'Hello World from db';
    }
}
