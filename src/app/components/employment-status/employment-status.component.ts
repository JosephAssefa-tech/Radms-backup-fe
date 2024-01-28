import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EmploymentStatus } from 'src/app/models/get/employment-status';
import { EmployementStatusService } from 'src/app/services/employment-status/employement-status.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { EmploymentStatusModalComponent } from 'src/app/shared/employment-status-modal/employment-status-modal.component';

@Component({
  selector: 'app-employment-status',
  templateUrl: './employment-status.component.html',
  styleUrls: ['./employment-status.component.scss']
})
export class EmploymentStatusComponent implements OnInit {
  accidentCauses:EmploymentStatus[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileService:EmployementStatusService) {}



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
  openDeleteConfirmation(employmentStatusId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(employmentStatusId);
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
  deleteVechile(employmentStatusId:number)
{
  this.vechileService.delete(employmentStatusId,'employmentStatusId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechiles = this.accidentCauses.filter(vechile => vechile.employmentStatusId !== employmentStatusId);
      this.accidentCauses = updatedVechiles;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(employmentStatusId: number) {
    this.vechileService.update(employmentStatusId);
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
      nzTitle: 'Employment Master',
      nzContent: EmploymentStatusModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<EmploymentStatusModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileMasters();

  }

}
