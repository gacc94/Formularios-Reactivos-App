import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-switches',
    templateUrl: './switches.component.html',
    styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

    myForm: FormGroup = this.fb.group({
        genero      : ['M', [Validators.required]],
        notification: [true, [Validators.required]],
        condition   : [, [Validators.requiredTrue]],
    });

    person= {
        genero: 'F',
        notification: true,
    }

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(){
        this.myForm.patchValue({
            ...this.person,
            contion: false
        });

        this.myForm.valueChanges
            .subscribe(({condition,  ...rest }) => {
                console.log(rest);
                this.person = rest;
            })
    }
    onSubmit(){
        if(!this.myForm.valid) return;

        console.log(this.myForm.value);

        const formValue = this.myForm.value;

        // this.myForm.reset();
        this.person = {
            genero      : formValue.genero,
            notification: formValue.notification,
        }
    }
    // onSave() {
    //     console.log(this.myForm.value);
    // }
}
