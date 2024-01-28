import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HighwayMaster } from 'src/app/models/get/highway-master';
import { AccidentDetailServiceService } from 'src/app/services/accident-service/accident-detail-service.service';
import { HighwayMasterService } from 'src/app/services/highway-master/highway-master.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { AccidentCasuseModalComponent } from 'src/app/shared/accident-casuse-modal/accident-casuse-modal.component';
import { HighwayMasterModalComponent } from 'src/app/shared/highway-master-modal/highway-master-modal.component';

@Component({
  selector: 'app-highway-master',
  templateUrl: './highway-master.component.html',
  styleUrls: ['./highway-master.component.scss']
})
export class HighwayMasterComponent implements OnInit {

  accidentCauses:HighwayMaster[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileService:HighwayMasterService) {}


  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.vechileService.getVechilesListByLanguage(language).subscribe((vechiles: any[]) => {
        this.accidentCauses = vechiles;
        console.log(this.accidentCauses);
      });});

    this.loadVechileMasters();
  }
  loadVechileMasters()
  {
    this.vechileService.vechiles$.subscribe(vechiles => {
      this.accidentCauses = vechiles;

    });

  }
  openDeleteConfirmation(hid: string) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(hid);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.vechileService.updateSelectedRegionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteVechile(hid:string)
{
  this.vechileService.delete(hid,'hid').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechiles = this.accidentCauses.filter(vechile => vechile.hid !== hid);
      this.accidentCauses = updatedVechiles;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(vehicleId: number) {
    this.vechileService.update(vehicleId);
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Highway Master',
      nzContent: HighwayMasterModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<HighwayMasterModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileMasters();

  }

}
