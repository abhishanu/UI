import { Component, TemplateRef,ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {CommonService} from '../../services/common.service';
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  modalRef: BsModalRef;
    @ViewChild("template") template: TemplateRef<any>
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  constructor(private modalService: BsModalService,private _commonService:CommonService) {}
   openModal() {      
    this.modalRef = this.modalService.show(
      this.template,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
  }
  ngOnInit() {
    this._commonService.showModal$.subscribe((res) => {
       this.openModal();
    });
    
  }
}