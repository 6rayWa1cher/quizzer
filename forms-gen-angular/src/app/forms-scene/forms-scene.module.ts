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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsSceneService } from './forms-scene.service';
import { GenerateFormEditorWrapperComponent } from './generate-form-editor-wrapper/generate-form-editor-wrapper.component';
import { GenerateFormEditorComponent } from './generate-form-editor/generate-form-editor.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RestrictToNumbersDirective } from './directives/restrict-to-numbers.directive';


@NgModule( {
    declarations: [
        WindowComponent,
        TabsComponent,
        FormEditorWrapperComponent,
        GenerateFormEditorWrapperComponent,
        GenerateFormEditorComponent,
        RestrictToNumbersDirective,
    ],
    imports: [
        CommonModule,
        FormEditorModule,
        FormResponsesModule,
        FormViewModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
    ],
    exports: [
        WindowComponent,
    ],
    providers: [
        FormsSceneService,
    ],
} )
export class FormsSceneModule { }
