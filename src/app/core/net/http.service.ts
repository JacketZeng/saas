import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    get(url) {
        this.http.get(url).subscribe((respData: any) => {
        });
    }

    post(url: string, body: any, options?) {
        this.http.post(url, body, options).subscribe((respData: any) => { });
    }

}
