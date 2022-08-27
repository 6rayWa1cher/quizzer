import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent as FormViewLoaderComponent } from './form-view/loader/loader.component';
import { WindowComponent as FormsSceneWindowComponent } from './forms-scene/window/window.component';

const routes: Routes = [
    { path: '', component: FormsSceneWindowComponent },
    { path: 'form/:id', component: FormViewLoaderComponent },
    { path: '**', redirectTo: '' },
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule],
} )
export class AppRoutingModule { }
