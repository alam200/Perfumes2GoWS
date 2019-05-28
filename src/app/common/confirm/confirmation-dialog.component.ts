import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() title: string;
  @Input() message1: string;
  @Input() message2: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(
    public activeModal: NgbActiveModal
  ) { }
  
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}