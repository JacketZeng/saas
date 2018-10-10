import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DefaultInterceptor } from './core/services/default.interceptor';
registerLocaleData(zh);


const INTERCEPTOR_PROVIDES = [
    // { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule,
        LayoutModule,
        RoutesModule,
        BrowserAnimationsModule
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }, ...INTERCEPTOR_PROVIDES],
    bootstrap: [AppComponent]
})
export class AppModule { }
