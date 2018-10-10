import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/services/auth-guard.service';
import { PasswordComponent } from './password.component';
import { InfoComponent } from './info.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: 'baseinfo',
                        component: InfoComponent
                    },
                    {
                        path: 'password',
                        component: PasswordComponent
                    },{
                        path: 'notice',
                        component: PasswordComponent
                    },{
                        path: 'blackList',
                        component: PasswordComponent
                    },
                ]
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class AccountRoutingModule { }
