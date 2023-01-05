import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-basicos',
    templateUrl: './basicos.component.html',
    styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

    // myForm: FormGroup = new FormGroup({
    //     producto    : new FormControl( 'RTX 480ti' ),
    //     precio      : new FormControl( '1200' ),
    //     existencias : new FormControl( 2 ),
    // });
    myForm: FormGroup = this.formBuilder.group({
        producto    : ['', [Validators.required, Validators.minLength(3)], ],
        precio      : ['', [Validators.required,Validators.min(0)]],
        existencias : ['', [Validators.required, Validators.min(0)]],
    })

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(){
        this.myForm.setValue({
            producto    : 'RTX 480ti',
            precio      : '1200',
            existencias : 2
        })
    }

    isInvalid(campo: string): boolean {
        const control = this.myForm.controls[campo];

        return (control.invalid
                && control.touched);
    }

    onSaveForm(){
        if(this.myForm.invalid){
            this.myForm.markAllAsTouched();
            return;
        }
        console.log(this.myForm.value);
        this.myForm.reset();

    }


}
