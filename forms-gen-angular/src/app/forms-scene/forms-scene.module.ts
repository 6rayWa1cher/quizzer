import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormEditorModule } from '../form-editor/form-editor.module';
import { FormResponsesModule } from '../form-responses/form-responses.module';
import { FormViewModule } from '../form-view/form-view.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormEditorWrapperComponent } from './form-editor-wrapper/form-editor-wrapper.component';
import { AIFormEditorWrapperComponent } from './ai-form-editor-wrapper/ai-form-editor-wrapper.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsSceneService } from './forms-scene.service';
import { AIFormEditorComponent } from './ai-form-editor/ai-form-editor';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule( {
    declarations: [
        WindowComponent,
        TabsComponent,
        FormEditorWrapperComponent,
        AIFormEditorWrapperComponent,
        AIFormEditorComponent
    ],
    imports: [
        CommonModule,
        FormEditorModule,
        FormResponsesModule,
        FormViewModule,
        MatCardModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatProgressBarModule
    ],
    exports: [
        WindowComponent,
    ],
    providers: [
        FormsSceneService,
    ],
} )
export class FormsSceneModule { }
