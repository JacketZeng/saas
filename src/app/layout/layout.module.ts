import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
    IndexComponent,
    HeaderComponent,
    SidebarComponent
];

@NgModule({
    imports: [SharedModule],
    declarations: [
        ...COMPONENTS,
    ],
    exports: [
        ...COMPONENTS,
    ]
})
export class LayoutModule { }
