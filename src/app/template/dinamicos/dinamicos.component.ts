import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorito, Person } from 'src/app/models/person.model';

@Component({
    selector: 'app-dinamicos',
    templateUrl: './dinamicos.component.html',
    styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

    @ViewChild('myForm') myForm!: NgForm;

    nuevoJuego: string = '';
    person: Person = {
        nombre: 'Gustavo',
        favoritos: [
            {
                id: 1,
                nombre: 'Salsa',
            },
            {
                id: 2,
                nombre: 'Pop',
            },
        ]
    }
    constructor() { }

    onSubmit() { }

    guardar() {
        console.log("Guardando dinamicos", this.myForm.value);
    }

    deleteFavorites(index: number) {
        this.person.favoritos.splice(index, 1);
    }


    addNewGame() {
        if(!this.nuevoJuego){
            return;
        }

        let nuevoFavorito: Favorito = {
            id      : (this.person.favoritos.length + 1),
            nombre  : this.nuevoJuego,
        } ;

        this.person.favoritos.push({...nuevoFavorito});
        this.nuevoJuego = '';
    }
}
