import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormEditorWrapperComponent } from '../form-editor-wrapper/form-editor-wrapper.component';

@Component( {
    selector: 'forms-scene-generate-form-editor-wrapper',
    templateUrl: './generate-form-editor-wrapper.component.html',
    styleUrls: ['./generate-form-editor-wrapper.component.scss'],
} )
export class GenerateFormEditorWrapperComponent implements OnInit {
    constructor ( public dialogRef: MatDialogRef<FormEditorWrapperComponent> ) { }

    ngOnInit (): void {
    }

    close () {
        this.dialogRef.close();
    }
}
