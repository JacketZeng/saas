import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-layout-basic',
  template: `
    <nz-layout style="height:100%;">
        <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="triggerTemplate">
            <div class="logo">SaaS语音发送平台</div>
            <ul nz-menu [nzTheme]="'dark'" [nzMode]="'inline'" [nzInlineCollapsed]="isCollapsed">
            <li nz-submenu>
                <span title><i class="anticon anticon-user"></i><span class="nav-text">User</span></span>
                <ul>
                <li nz-menu-item>Tom</li>
                <li nz-menu-item>Bill</li>
                <li nz-menu-item>Alex</li>
                </ul>
            </li>
            <li nz-submenu>
                <span title><i class="anticon anticon-team"></i><span class="nav-text">Team</span></span>
                <ul>
                <li nz-menu-item>Team 1</li>
                <li nz-menu-item>Team 2</li>
                </ul>
            </li>
            <li nz-menu-item><span><i class="anticon anticon-file"></i><span class="nav-text">File</span></span></li>
            </ul>
        </nz-sider>
        <nz-layout>
            <nz-header style="background: #fff; padding:0;">
                <div nz-row nzJustify="space-between" nzType="flex" >
                    <div nz-col nzSpan="4">
                        <i class="anticon trigger" [class.anticon-menu-fold]="!isCollapsed" [class.anticon-menu-unfold]="isCollapsed" (click)="isCollapsed=!isCollapsed"></i>
                    </div>
                    <div nz-col nzSpan="4" class="notice-item">
                        <i style="margin-right:30px; cursor:pointer;" class="anticon anticon-bell"></i>
                        <i style="margin-right:30px; cursor:pointer;" class="anticon anticon-logout" routerLink="/login"></i>
                        <i style="margin-right:30px; cursor:pointer;" class="anticon anticon-user" routerLink="/account/info"></i>
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
  styleUrls : ['./index.component.less']
})
export class IndexComponent {
}
