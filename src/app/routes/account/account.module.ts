import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { PasswordComponent } from './password.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';
import { AccountComponent } from './account.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AccountRoutingModule
    ],
    declarations: [PasswordComponent, InfoComponent, AccountComponent]
})
export class AccountModule { }
