import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component( {
    selector: 'forms-scene-ai-form-editor-wrapper',
    templateUrl: './ai-form-editor-wrapper.component.html',
    styleUrls: ['./ai-form-editor-wrapper.component.scss'],
} )
export class AIFormEditorWrapperComponent implements OnInit {
    constructor ( public dialogRef: MatDialogRef<AIFormEditorWrapperComponent> ) { }

    ngOnInit (): void {
    }

    close () {
        this.dialogRef.close();
    }
}
