import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-prueba-form',
    templateUrl: './prueba-form.component.html',
    styleUrls: ['./prueba-form.component.scss']
})
export class PruebaFormComponent {

    myForm: FormGroup = this.fb.group({
        name    : ['', [Validators.required, Validators.minLength(3)]],
        dni     : ['', [Validators.required, Validators.minLength(7)]],
        email   : ['', [Validators.required]],
        password: ['', [Validators.required]],
        genero  : ['', [Validators.required]],
    });

    data = {
        name    : 'Gustavo',
        dni     : '7294625',
        email   : 'gacc94@gmailñ.com',
        password: '123',
        genero  : 'F',
    }
    constructor(
        private fb: FormBuilder,
    ) {
    }

    ngOnInit(){
        this.myForm.patchValue({
            ...this.data,
        })

        this.myForm.valueChanges
            .subscribe((value) => {
                this.data = value;
            })
        console.log(this.myForm.controls['name'].invalid);
    }

    isInvalid(campo: string): boolean{
        return (!this.myForm.controls[campo].valid);
    }

    onSubmit() {
        if(!this.myForm.valid) {
            this.myForm.markAsTouched();
            return;
        };

        console.log(this.myForm.value);
        console.log(this.data);

        this.myForm.reset();
    }

    onSave(){
        console.log('Submit');

    }
}
