import { Controller, Get } from '@nestjs/common';
import { FormsDiscordService } from './forms-discord.service';

@Controller()
export class FormsDiscordController {
    constructor ( private readonly formsDiscordService: FormsDiscordService ) {}

    @Get()
    getHello (): string {
        return this.formsDiscordService.getHello();
    }
}
