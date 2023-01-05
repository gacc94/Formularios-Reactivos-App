import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'register',
                component: ResgisterComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: '**',
                redirectTo: 'register',
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
