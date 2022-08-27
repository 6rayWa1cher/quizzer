import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormViewModule } from './form-view/form-view.module';
import { FormsSceneModule } from './forms-scene/forms-scene.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule( {
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormViewModule,
        FormsSceneModule,
        MatSnackBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
} )
export class AppModule { }
