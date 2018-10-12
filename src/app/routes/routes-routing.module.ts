import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from '../layout/index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: 'accountmanage', loadChildren: './account/account.module#AccountModule' }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
    exports: [RouterModule],
    providers: []
})
export class RoutesRoutingModule { }
