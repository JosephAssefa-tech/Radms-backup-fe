import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AccidentCause } from 'src/app/models/get/accident-detail-model';
import { AccidentType } from 'src/app/models/get/accident-type';
import { AccidentTypeService } from 'src/app/services/accident-types/accident-type.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { AccidentTypeModalComponent } from 'src/app/shared/accident-type-modal/accident-type-modal.component';

@Component({
  selector: 'app-accident-type',
  templateUrl: './accident-type.component.html',
  styleUrls: ['./accident-type.component.scss']
})
export class AccidentTypeComponent implements OnInit {
  accidentCauses:AccidentType[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileService:AccidentTypeService) {}



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
  openDeleteConfirmation(accidentTypeId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(accidentTypeId);
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
  deleteVechile(accidentTypeId:number)
{
  this.vechileService.delete(accidentTypeId,'accidentTypeId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechiles = this.accidentCauses.filter(vechile => vechile.accidentTypeId !== accidentTypeId);
      this.accidentCauses = updatedVechiles;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(accidentTypeId: number) {
    this.vechileService.update(accidentTypeId);
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
      nzTitle: 'Accident type Master',
      nzContent: AccidentTypeModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<AccidentTypeModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileMasters();

  }

}
