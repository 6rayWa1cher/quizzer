import { Controller, Get } from '@nestjs/common';
import { FormsDbService } from './forms-db.service';

@Controller()
export class FormsDbController {
    constructor ( private readonly formsDbService: FormsDbService ) {}

    @Get()
    getHello (): string {
        return this.formsDbService.getHello();
    }
}
