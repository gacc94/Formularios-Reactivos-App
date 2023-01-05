import { Directive, Input } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true,
    }],
})
export class CustomMinDirective {

    @Input() minimo!: number;

    constructor(
    ){ }

    validate(control: FormControl) {
        const inputValue = control.value;

        console.log(inputValue);
        console.log('Minimo',this.minimo);

        return (inputValue < this.minimo) ? {'customMin': true} : null;
    }
}