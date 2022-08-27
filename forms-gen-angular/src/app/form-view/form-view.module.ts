import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WindowComponent } from './window/window.component';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { FieldSelectComponent } from './field-select/field-select.component';
import { FieldsCollectionComponent } from './fields-collection/fields-collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormViewService } from './form-view.service';


@NgModule( {
    declarations: [
        LoaderComponent,
        WindowComponent,
        FieldInputComponent,
        FieldTextareaComponent,
        FieldSelectComponent,
        FieldsCollectionComponent,
        HeaderComponent,
        FooterComponent,
        SubmittedComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatListModule,
        MatDividerModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        FormsModule,
    ],
    exports: [
        LoaderComponent,
        WindowComponent,
    ],
    providers: [
        FormViewService,
    ],
} )
export class FormViewModule { }
