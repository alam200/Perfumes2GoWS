import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message1: string,
    message2: string,
    btnOkText: string = 'YES',
    btnCancelText: string = 'NO'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: "lg" });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message1 = message1;
    modalRef.componentInstance.message2 = message2;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

}
