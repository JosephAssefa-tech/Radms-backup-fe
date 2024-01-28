import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { VehicleOwnership } from 'src/app/models/get/vehicle-ownership';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { VechileOwnerService } from 'src/app/services/vechile-ownership/vechile-owner.service';
import { VechileOwnerModalComponent } from 'src/app/shared/vechile-owner-modal/vechile-owner-modal.component';

@Component({
  selector: 'app-vechile-ownership',
  templateUrl: './vechile-ownership.component.html',
  styleUrls: ['./vechile-ownership.component.scss']
})
export class VechileOwnershipComponent implements OnInit {
  vechilesOwners:VehicleOwnership[]=[];

  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileOwnershipService:VechileOwnerService) {}

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.vechileOwnershipService.getVechilesListByLanguage(language).subscribe((vechiles: any[]) => {
        this.vechilesOwners = vechiles;

      });});

    this.loadVechileOwnersMasters();
  }
  loadVechileOwnersMasters()
  {
    this.vechileOwnershipService.vechiles$.subscribe(vechiles => {
      this.vechilesOwners = vechiles;

    });

  }
  openDeleteConfirmation(vehicleOwnershipId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(vehicleOwnershipId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.vechileOwnershipService.updateSelectedVechileDefectRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteVechile(vehicleOwnershipId:number)
{
  this.vechileOwnershipService.delete(vehicleOwnershipId,'vehicleOwnershipId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechileDefects = this.vechilesOwners.filter(vechile => vechile.vehicleOwnershipId !== vehicleOwnershipId);
      this.vechilesOwners = updatedVechileDefects;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(vehicleOwnershipId: number) {
    this.vechileOwnershipService.update(vehicleOwnershipId);
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
      nzTitle: 'Vechile Owner Master',
      nzContent: VechileOwnerModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<VechileOwnerModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileOwnersMasters();

  }


}
