import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaderResponse, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

export class MyInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<
        | HttpHeaderResponse
        | HttpResponse<any>
        > {
        let req = request.clone();
        console.log('===============request:' + req.url);
        return next.handle(req).pipe(mergeMap((event: any) => {
            // 正常返回，处理具体返回参数
            if (event instanceof HttpResponse)
                return this.handleData(event);//具体处理请求返回数据
            return of(event);
        }),
            catchError((err: HttpErrorResponse) => this.handleData(err)))
    }

    private handleData(
        event: HttpResponse<any> | HttpErrorResponse,
    ): Observable<any> {
        // 业务处理：一些通用操作
        var headers = event.headers;
        var accessState = headers["access-state"];
        if (accessState && accessState == "unlogin") {
            console.log('unlogin');
        } else if (accessState && accessState == "unauthorized") {
            console.log('unauthorized');
        }
        console.log('===============response:'+event.status);
        console.log(event);
        switch (event.status) {
            case 200:
                if (event instanceof HttpResponse) {
                    const body: any = event.body;
                    if (body && body.rc == 3) {
                        //this.auth.logout();
                    }
                }
                break;
            case 401: // 未登录状态码
                //this.auth.logout();
                break;
            case 404:
            case 500:
                break;
            default:
                return of(event);
        }
    }
}