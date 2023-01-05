import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-switches',
    templateUrl: './switches.component.html',
    styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

    @ViewChild('myForm') myForm!: NgForm;

    persona = {
        genero          : 'F',
        notificaciones  : true,
    }

    terminosYcondiciones: boolean = false;

    get validation(): Validators | null {
        return (this.myForm?.controls['terminos']?.errors)
    }
    set validation(campo: any) {
        this.myForm?.controls['terminos']?.setErrors(campo);
    }
}
