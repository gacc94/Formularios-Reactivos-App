import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {emailPattern, namePattern, noStrider} from "../../../shared/validator/validation";
import {ValidatorService} from "../../../shared/validator/validator.service";
import {EmailValidatorService} from "../../../shared/validator/email-validator.service";
@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.scss']
})
export class ResgisterComponent {


    myForm: FormGroup = this.fb.group({
        name        : ['',[Validators.required, Validators.pattern(this.validationService.namePattern)]],
        email       : ['',[Validators.required, Validators.pattern(this.validationService.emailPattern)],[this.emailValidatorService]],
        username    : ['', [Validators.required,this.validationService.noStrider]],
        password    : ['', [Validators.required, Validators.minLength(6)]],
        confirm     : ['', [Validators.required]],
    },{
        validators: [this.validationService.equals('password','confirm')]
    })

    //emailErrorMsg: string ='';
    get emailErrorMsg(): string {
        const errors = this.myForm.get('email')?.errors;
        if(errors?.['required']){
            return 'El email es obligatorio';
        }else if( errors?.['pattern'] ){
            return 'El valor ingresado no tiene formato de correo'
        }else if(errors?.['emailTomado']){
            return 'El email ya fue tomado'
        }
        return '';
    }
    constructor(
        private fb: FormBuilder,
        private validationService: ValidatorService,
        private emailValidatorService: EmailValidatorService,
    ) {
    }
    ngOnInit(){
        this.myForm.patchValue({
            name: 'Gustavo Alexander',
            email: 'gustavocaqui94@gmail.com',
            username: 'gacc94'
        })
    }
    onSubmit(){
        if(!this.myForm.valid) {
            this.myForm.markAllAsTouched();
            return;
        }

        console.log(this.myForm.value)
        this.myForm.reset();
    }
    emailRequired(campo: string){
        return (!this.myForm.controls['email']?.valid)
            && this.myForm.controls['email'].touched;
    }

    isInvalid(campo: string): boolean {
        return (!this.myForm.controls[campo].valid)
                && this.myForm.controls[campo].touched;
    }


}
