import { Component } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

    templateMenu: Array<MenuItem> =[
        {
            texto: 'Básicos',
            ruta: './template/basicos'
        },
        {
            texto: 'Dinámicos',
            ruta: './template/dinamicos'
        },
        {
            texto: 'Switches',
            ruta: './template/switches'
        },
    ];

    reactiveMenu: Array<MenuItem> =[
        {
            texto: 'Básicos',
            ruta: './reactive/basicos'
        },
        {
            texto: 'Dinámicos',
            ruta: './reactive/dinamicos'
        },
        {
            texto: 'Switches',
            ruta: './reactive/switches'
        },
    ];

    authMenu: Array<MenuItem> =[
        {
            texto: 'Register',
            ruta: './auth/register'
        },
        {
            texto: 'Login',
            ruta: './auth/login'
        },
    ];
}

