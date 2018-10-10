import { Component } from '@angular/core';
import { Navigation } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
    selector: 'nz-demo-layout-basic',
    template: `
    <nz-layout style="height:100%;">
        <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="triggerTemplate" style="background:#277bfa;">
            <div *ngIf="!isCollapsed" class="logo">SaaS语音发送平台</div>
            <div *ngIf="isCollapsed" class="logo">SaaS</div>
            <div>
                <ul nz-menu [nzTheme]="'light'" [nzMode]="'inline'" [nzInlineCollapsed]="isCollapsed">
                    <li nz-submenu *ngFor="let item of menus">
                        <span title><i class="anticon" [class.anticon-home]="item.sort==1" [class.anticon-contacts]="item.sort==2" [class.anticon-table]="item.sort==3"></i><span class="nav-text">{{item.name}}</span></span>
                        <ul *ngFor="let sub of item.lists">
                            <li nz-menu-item (click)="navigateTo(sub.url)">{{sub.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nz-sider>
        <nz-layout>
            <nz-header style="background: #fff; padding:0;border-bottom:1px solid #dedede;">
                <div nz-row nzJustify="space-between" nzType="flex" >
                    <div nz-col nzSpan="4">
                        <i class="anticon trigger" [class.anticon-menu-fold]="!isCollapsed" [class.anticon-menu-unfold]="isCollapsed" (click)="isCollapsed=!isCollapsed"></i>
                    </div>
                    <div nz-col nzSpan="4" class="notice-item">
                        <i style="margin-right:30px; cursor:pointer;position:relative;" class="anticon anticon-bell" (click)="navigateTo('/accountmanage/notice')">
                            <nz-badge [nzCount]="count" style="position:absolute;top:-10px;"></nz-badge>
                        </i>
                        <i style="margin-right:30px; cursor:pointer;" class="anticon anticon-logout" (click)="navigateTo('/login')"></i>
                        <i style="margin-right:30px; cursor:pointer;" class="anticon anticon-user" (click)="navigateTo('/accountmanage/baseinfo')"></i>
                    </div>
                </div>
            </nz-header>
            <nz-content style="margin:0 16px;overflow:auto;">
                <nz-breadcrumb style="margin:16px 0;">
                    <nz-breadcrumb-item>User</nz-breadcrumb-item>
                    <nz-breadcrumb-item>Bill</nz-breadcrumb-item>
                </nz-breadcrumb>
                <div style="padding:24px; background: #fff; min-height: 3600px;">
                    <router-outlet></router-outlet>
                </div>
            </nz-content>
        </nz-layout>
    </nz-layout>
    <ng-template #trigger>
        <i class="anticon anticon-up"></i>
    </ng-template>
  `,
    styleUrls: ['./index.component.less']
})
export class IndexComponent {

    constructor(private router: Router) {

    }

    
    count = 0;
    addCount(): void {
        this.count++;
    }

    minCount(): void {
        this.count--;
        if (this.count < 0) {
            this.count = 0;
        }
    }

    navigateTo(url) {
        this.router.navigate([url.replace('#', '')]);
    }

    menus = [
        {
            "id": 400000,
            "name": "语音通知发送",
            "url": "",
            "icoCls": "fa fa-sendVoicend",
            "sort": 1,
            "lists": [
                {
                    "id": 400400,
                    "name": "下载详情",
                    "url": "#/sendManage/sendRecord/downloadList",
                    "icoCls": null,
                    "sort": 0,
                    "lists": []
                },
                {
                    "id": 400200,
                    "name": "任务管理",
                    "url": "#/sendManage/sendRecord",
                    "icoCls": null,
                    "sort": 2,
                    "lists": [{
                        "id": 400201,
                        "name": "发送记录",
                        "url": "#/sendManage/sendRecord/*",
                        "icoCls": null,
                        "sort": 1,
                        "lists": []
                    }]
                },
                {
                    "id": 400300,
                    "name": "模板管理",
                    "url": "#/sendManage/template",
                    "icoCls": null,
                    "sort": 3,
                    "lists": [{
                        "id": 400301,
                        "name": "模板管理",
                        "url": "#/sendManage/template/*",
                        "icoCls": null,
                        "sort": 1,
                        "lists": []
                    }]
                }]
        },
        {
            "id": 200000,
            "name": "账号管理",
            "url": "",
            "icoCls": "fa fa-user",
            "sort": 2,
            "lists": [
                {
                    "id": 200100,
                    "name": "基础信息",
                    "url": "#/accountmanage/baseinfo",
                    "icoCls": null,
                    "sort": 1,
                    "lists": []
                },
                {
                    "id": 200300,
                    "name": "密码修改",
                    "url": "#/accountmanage/password",
                    "icoCls": null,
                    "sort": 3,
                    "lists": []
                },
                {
                    "id": 200400,
                    "name": "系统消息",
                    "url": "#/accountmanage/notice",
                    "icoCls": null,
                    "sort": 4,
                    "lists": []
                },
                {
                    "id": 200600,
                    "name": "黑名单管理",
                    "url": "#/accountmanage/blackList",
                    "icoCls": null,
                    "sort": 6,
                    "lists": []
                }]
        },
        {
            "id": 300000,
            "name": "报表管理",
            "url": "",
            "icoCls": "fa fa-report",
            "sort": 3,
            "lists": [
                {
                    "id": 300100,
                    "name": "话单详情",
                    "url": "#/statistics/ticket",
                    "icoCls": null,
                    "sort": 1,
                    "lists": [{
                        "id": 300101,
                        "name": "话单详情",
                        "url": "#/statistics/ticket/*",
                        "icoCls": null,
                        "sort": 1,
                        "lists": []
                    }]
                },
                {
                    "id": 300400,
                    "name": "下载详情",
                    "url": "#/statistics/download",
                    "icoCls": null,
                    "sort": 1,
                    "lists": [{
                        "id": 300401,
                        "name": "下载详情",
                        "url": "#/statistics/download/*",
                        "icoCls": null,
                        "sort": 1,
                        "lists": []
                    }]
                },
                {
                    "id": 300200,
                    "name": "月结账单",
                    "url": "#/statistics/monthbill",
                    "icoCls": null,
                    "sort": 2,
                    "lists": [{
                        "id": 300201,
                        "name": "月结账单",
                        "url": "#/statistics/monthbill/*",
                        "icoCls": null,
                        "sort": 1,
                        "lists": []
                    }]
                },
                {
                    "id": 300300,
                    "name": "月/年账单趋势",
                    "url": "#/statistics/trend",
                    "icoCls": null,
                    "sort": 3,
                    "lists": [{
                        "id": 300301,
                        "name": "月/年账单趋势",
                        "url": "#/statistics/trend/*",
                        "icoCls": null,
                        "sort": 1,
                        "lists": []
                    }]
                }]
        }];
}
