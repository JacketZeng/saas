import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { MyInterceptor } from './core/net/http-interceptor.service';
import { StartupService } from './core/startup/startup.service';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AuthService } from './core/util/auth.service';
registerLocaleData(zh);

// #region Startup Service
export function StartupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}
const APPINIT_PROVIDES = [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true
    }
];
// #endregion

const INTERCEPTOR_PROVIDES = [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
];

const COMMON_PROVIDERS = [
    AuthService
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
    providers: [
        { provide: NZ_I18N, useValue: zh_CN },
        ...INTERCEPTOR_PROVIDES,
        ...COMMON_PROVIDERS,
        ...APPINIT_PROVIDES
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
