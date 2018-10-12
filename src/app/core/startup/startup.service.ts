import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Urls } from '../../../assets/configs/urls';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
    constructor(
        private httpClient: HttpClient,
        private injector: Injector
    ) { }

    private viaHttp(resolve: any, reject: any) {
        zip(
            this.httpClient.get(Urls.LOGIN_INFO_URL)
        ).pipe(
            // 接收其他拦截器后产生的异常消息
            catchError(([appData]) => {
                resolve(null);
                return [appData];
            })
        ).subscribe(([appData]) => {
            // application data
            const res: any = appData;
        },
            () => { },
            () => {
                resolve(null);
            });
    }

    private viaMock(resolve: any, reject: any) {
        //TODO

        resolve({});
    }

    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            // http
            this.viaHttp(resolve, reject);
            // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
            // this.viaMock(resolve, reject);
        });
    }
}
