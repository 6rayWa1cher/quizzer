import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { FieldSelectComponent } from './field-select/field-select.component';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldsCollectionComponent } from './fields-collection/fields-collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewFieldComponent } from './new-field/new-field.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { FormEditorService } from './form-editor.service';


@NgModule( {
    declarations: [
        WindowComponent,
        FieldSelectComponent,
        FieldTextareaComponent,
        FieldInputComponent,
        FieldsCollectionComponent,
        HeaderComponent,
        FooterComponent,
        NewFieldComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
    ],
    exports: [
        WindowComponent,
    ],
    providers: [
        FormEditorService,
    ],
} )
export class FormEditorModule { }
