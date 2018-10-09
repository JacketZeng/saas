import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotififyComponent } from './notifify/notifify.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';


const COMPONENTS = [NotififyComponent];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgZorroAntdModule
    ],
    declarations: [...COMPONENTS],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgZorroAntdModule
    ]
})
export class SharedModule { }
