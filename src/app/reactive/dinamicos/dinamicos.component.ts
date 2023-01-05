import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'app-dinamicos',
    templateUrl: './dinamicos.component.html',
    styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

    myForm: FormGroup = this.formBuilder.group({
        nombre      : ['Gustavo', [Validators.required, Validators.minLength(3)]],
        favorites   : this.formBuilder.array([
            ['Metal Gear', Validators.required],
            ['Grass'    , Validators.required],
            ['Stone'    , Validators.required],
        ], Validators.required)
    });

    newFavorite: FormControl = this.formBuilder.control('', Validators.required)

    get favoritesArr(){
        return <FormArray>this.myForm.get('favorites') ;
    }

    constructor(
        private formBuilder: FormBuilder,
    ) {
        console.log(this.myForm.controls['favorites']?.value);
        console.log(this.myForm.controls['nombre'].invalid);
        console.log(this.myForm.get('nombre')?.value);
    }

    isInvalid(campo: string): boolean {
        return (this.myForm.controls[campo]?.touched
                && this.myForm.controls[campo]?.invalid);
    }

    addFavorite() {
        if(!this.newFavorite.valid) return;

        // this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));
        this.favoritesArr.push(this.formBuilder.control(this.newFavorite.value, Validators.required));

        this.newFavorite.reset();

    }
    removeFavorite(index: number) {
        this.favoritesArr.removeAt(index);

    }
    onSubmit() {
        if(this.myForm.invalid){
            this.myForm.markAllAsTouched();
            return ;
        }
        console.log(this.myForm.value);
    }
}
