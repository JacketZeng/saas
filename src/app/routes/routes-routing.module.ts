import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from '../core/services/auth-guard.service';
import { AuthService } from '../core/services/auth.service';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from '../layout/index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'account', loadChildren: './account/account.module#AccountModule' }
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
    providers: [AuthGuard, AuthService]
})
export class RoutesRoutingModule { }
