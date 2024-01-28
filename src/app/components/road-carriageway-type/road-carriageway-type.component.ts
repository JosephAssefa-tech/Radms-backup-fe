import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RoadCarriageway } from 'src/app/models/get/road-carriageway';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RoadCarriagewayService } from 'src/app/services/road-carriageway/road-carriageway.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { AccidentCasuseModalComponent } from 'src/app/shared/accident-casuse-modal/accident-casuse-modal.component';
import { RoadcaarriagewayTypeModalComponent } from 'src/app/shared/roadcaarriageway-type-modal/roadcaarriageway-type-modal.component';

@Component({
  selector: 'app-road-carriageway-type',
  templateUrl: './road-carriageway-type.component.html',
  styleUrls: ['./road-carriageway-type.component.scss']
})
export class RoadCarriagewayTypeComponent implements OnInit {

  accidentCauses:RoadCarriageway[]=[];
  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private vechileService:RoadCarriagewayService) {}


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
  openDeleteConfirmation(roadCarriagewayId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteVechile(roadCarriagewayId);
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
  deleteVechile(roadCarriagewayId:number)
{
  this.vechileService.delete(roadCarriagewayId,'roadCarriagewayId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedVechiles = this.accidentCauses.filter(vechile => vechile.roadCarriagewayId !== roadCarriagewayId);
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
      nzTitle: 'Vechile Master',
      nzContent: RoadcaarriagewayTypeModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<RoadcaarriagewayTypeModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadVechileMasters();

  }

}
