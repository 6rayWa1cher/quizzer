import { Injectable } from '@nestjs/common';

@Injectable()
export class FormsDiscordService {
    getHello (): string {
        return 'Hello World from discord';
    }
}
