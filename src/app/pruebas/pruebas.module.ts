import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebasRoutingModule } from './pruebas-routing.module';
import { PruebaFormComponent } from './prueba-form/prueba-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PruebaFormComponent
    ],
    imports: [
        CommonModule,
        PruebasRoutingModule,
        ReactiveFormsModule,
    ]
})
export class PruebasModule { }
