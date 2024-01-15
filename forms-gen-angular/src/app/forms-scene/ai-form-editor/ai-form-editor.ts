import { Component, EventEmitter, Output } from '@angular/core';
import { FormsSceneService } from '../forms-scene.service';

@Component( {
    selector: 'ai-form-editor',
    templateUrl: './ai-form-editor.html',
    styleUrls: ['./ai-form-editor.scss'],
} )

export class AIFormEditorComponent {
    name: string = '';

    prompt: string = '';

    questions_count: number = 0;

    @Output() close_request: EventEmitter<any> = new EventEmitter();

    constructor ( private forms_scene_service: FormsSceneService ) { }

    close_editor () {
        this.close_request.emit();
    }

    send_request () {
        this.forms_scene_service.generate_form( {
            name: this.name,
            prompt: this.prompt,
            questions_count: this.questions_count,
        } ).then( () => {
            this.close_editor();
        } );
    }
}
