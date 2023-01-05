import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-basicos',
    templateUrl: './basicos.component.html',
    styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

    @ViewChild('miFormulario') miFormulario!: NgForm;

    initForm = {
        producto: 'RTX 4480i',
        precio: 10,
        existencias: 0
    }

    guardar() {
        console.log(this.miFormulario );
        this.miFormulario.resetForm({
            precio      : 0,
            existencias : 0,
        });
    }

    nombreValido(): boolean {
        return (this.miFormulario?.controls['producto']?.invalid
                && this.miFormulario?.controls['producto']?.touched);
    }

    precioValido(value: string): boolean {
        let cadena = this.miFormulario?.controls[value]
        return (cadena?.invalid
                && cadena?.touched);
    }
}
