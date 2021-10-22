import { ToastService } from './../services/toast.service';
import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  styles: [`.bg-success .toast-header { background-color: #28a745; }
            .bg-error .toast-header { background-color: #ff0000; }
            .toast-header { color: #ffffff; border-bottom: 0; } 
            .close { border: 0; background-color: transparent; font-size: 24px; color: #ffffff; }
            .toast-body { display: none; }`],
  encapsulation: ViewEncapsulation.None,
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent implements OnInit {
  autohide = true;

  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit(): void {
  }

}
