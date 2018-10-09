import { Component, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notifify',
  templateUrl: './notifify.component.html',
  styles  : []
})
export class NotififyComponent {

  constructor(private notification: NzNotificationService) {
  }

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}
