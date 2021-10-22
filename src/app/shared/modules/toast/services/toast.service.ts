import { Injectable, TemplateRef } from '@angular/core';
import { Toast } from 'src/app/shared/interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];
  headerToast: string = '';
  bodyToast: string = '';

  constructor() { }

  show(textOrTpl: string | Toast | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(data: string) {
    this.show({header: data}, { classname: 'bg-success text-light', delay: 1500 });
  }

  showError(data: string) {
    this.show({header: data}, { classname: 'bg-error text-light', delay: 1500 });
  }
}
