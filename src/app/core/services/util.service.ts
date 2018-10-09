import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }

  alert(message: string) {
    // this.ngbModal.open(message);
  }

  toolError(message: string, title?: string, options?: any) {
    // this.toastr.error(message, title, options);
  }
  toolSucc(message: string, title?: string, options?: any) {
    // this.toastr.success(message, title, options);
  }

}
