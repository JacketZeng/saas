import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
    LoginComponent,
    NotFoundComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
    imports: [
        RoutesRoutingModule,
        SharedModule
    ],
    declarations: [
        ...COMPONENTS,
        ...COMPONENTS_NOROUNT
    ],
    exports: [],
    entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule { }
