import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { ResponsesCollectionComponent } from './responses-collection/responses-collection.component';
import { ResponseBoxComponent } from './response-box/response-box.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormResponsesService } from './form-responses.service';


@NgModule( {
    declarations: [
        WindowComponent,
        ResponsesCollectionComponent,
        ResponseBoxComponent,
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        WindowComponent,
    ],
    providers: [
        FormResponsesService,
    ],
} )
export class FormResponsesModule { }
