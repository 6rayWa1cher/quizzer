import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FormsService } from './forms.service';


@ApiTags( 'Forms' )
@Controller( 'forms' )
export class FormsController {
    constructor ( private forms_service: FormsService ) { }

    @ApiOperation( { summary: 'test' } )
    @Get()
    test () {
        return this.forms_service.test();
    }
}
