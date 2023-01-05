import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaFormComponent } from './prueba-form/prueba-form.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'prueb-form',
                component: PruebaFormComponent,
            },
            {
                path: '**',
                redirectTo: 'prueba-form',
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PruebasRoutingModule { }
