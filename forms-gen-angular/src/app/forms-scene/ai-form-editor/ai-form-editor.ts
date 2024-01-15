import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormsSceneService } from '../forms-scene.service'
import { CreateAiForm } from 'src/app/types/create_ai_form';

@Component( {
    selector: 'ai-form-editor',
    templateUrl: './ai-form-editor.html',
    styleUrls: ['./ai-form-editor.scss'],
} )

export class AIFormEditorComponent {
    @Input() name: string = '';

    @Input() prompt: string = '';

    @Input() questions_count: string = '0';

    @Output() close_request: EventEmitter<any> = new EventEmitter();

    constructor (private forms_scene_service: FormsSceneService ) { }

    close_editor () {
        this.close_request.emit();
    }

    send_request () {
        this.forms_scene_service.generate_form( {name:this.name, prompt:this.prompt, questions_count:+this.questions_count} ).then( () => {
            this.close_editor();
        } );
    }

}
