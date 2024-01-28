import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { WoredaMaster } from 'src/app/models/get/woreda';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { WoredaMasterService } from 'src/app/services/woreda-service/woreda-master.service';
import { WoredaModalComponent } from 'src/app/shared/woreda-modal/woreda-modal.component';
import { ZoneModalComponent } from 'src/app/shared/zone-modal/zone-modal.component';

@Component({
  selector: 'app-woreda-master',
  templateUrl: './woreda-master.component.html',
  styleUrls: ['./woreda-master.component.scss']
})
export class WoredaMasterComponent implements OnInit {
  woredas: WoredaMaster[]=[];

  constructor(private sharedbuttonService: SharedButtonLabelService,private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private woredaService:WoredaMasterService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.woredaService.getWoredasListByLanguage(language).subscribe((woredass: any[]) => {
        this.woredas = woredass;
        console.log(this.woredas)

      });});
      this.loadWoredas();
  }
  loadWoredas()
  {
    this.woredaService.woredas$.subscribe(woreds => {
      this.woredas = woreds;

    });

  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Woreda Master',
      nzContent: WoredaModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();
      }
    });
  }
  editWoreda(rowData: any) {
    this.sharedbuttonService.setButtonLabel('Update');
    this.woredaService.update(rowData);
    this.showModal('Update Woreda');
    // Open the modal component
  }
  openDeleteConfirmation(zoneId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteZone(zoneId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  deleteZone(woredaId:number)
  {
    this.woredaService.delete(woredaId,'woredaId').subscribe(
      (response) => {
        // Success logic, if needed
        // Remove the deleted region from the regions array
        const updatedRegions = this.woredas.filter(zone => zone.woredaId !== woredaId);
        this.woredas = updatedRegions;
      },
      (error) => {
        console.error('Error deleting region:', error);
      }
    );
    this.sucessNotification('data')


  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }

}
