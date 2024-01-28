import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { JunctionType } from 'src/app/models/get/junction-type';
import { JunctionTypeService } from 'src/app/services/junction-types/junction-type.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { AccidentCasuseModalComponent } from 'src/app/shared/accident-casuse-modal/accident-casuse-modal.component';
import { JunctionTypeModalComponent } from 'src/app/shared/junction-type-modal/junction-type-modal.component';

@Component({
  selector: 'app-junction-type',
  templateUrl: './junction-type.component.html',
  styleUrls: ['./junction-type.component.scss']
})
export class JunctionTypeComponent implements OnInit {

  accidentCauses:JunctionType[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileService:JunctionTypeService) {}


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
  openDeleteConfirmation(junctionTypeId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(junctionTypeId);
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
  deleteVechile(junctionTypeId:number)
{
  this.vechileService.delete(junctionTypeId,'junctionTypeId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechiles = this.accidentCauses.filter(vechile => vechile.junctionTypeId !== junctionTypeId);
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
      nzTitle: 'Junction type Master',
      nzContent: JunctionTypeModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<JunctionTypeModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileMasters();

  }
}
