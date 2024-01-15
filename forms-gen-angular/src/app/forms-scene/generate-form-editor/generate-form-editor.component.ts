import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenerateFormDto } from 'src/app/types/generate_form_dto';
import { FormsSceneService } from '../forms-scene.service';

@Component( {
    selector: 'forms-scene-generate-form-editor',
    templateUrl: './generate-form-editor.component.html',
    styleUrls: ['./generate-form-editor.component.scss'],
} )
export class GenerateFormEditorComponent implements OnInit {
    @Input() closable: boolean = false;

    @Output() close_request: EventEmitter<void> = new EventEmitter();

    generate_form_dto: GenerateFormDto = {
        name: '',
        prompt: '',
        questions_count: 0,
    };

    constructor ( private forms_scene_service: FormsSceneService ) { }

    ngOnInit (): void {
    }

    close () {
        this.close_request.emit();
    }

    send_generate_form () {
        this.forms_scene_service.generate_form( this.generate_form_dto ).then( () => {
            this.close();
        } );
    }
}
