import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component( {
    selector: 'forms-scene-form-editor-wrapper',
    templateUrl: './form-editor-wrapper.component.html',
    styleUrls: ['./form-editor-wrapper.component.scss'],
} )
export class FormEditorWrapperComponent implements OnInit {
    constructor ( public dialogRef: MatDialogRef<FormEditorWrapperComponent> ) { }

    ngOnInit (): void {
    }

    close () {
        this.dialogRef.close();
    }
}
