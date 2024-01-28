import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RoadSurfaceCondition } from 'src/app/models/get/road-surface-condition';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RoadSurfaceConditionsService } from 'src/app/services/road-surface-condition/road-surface-conditions.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { RoadSurfaceModalComponent } from 'src/app/shared/road-surface-modal/road-surface-modal.component';
import { SharedModalComponent } from 'src/app/shared/shared-modal/shared-modal.component';

@Component({
  selector: 'app-road-surface-condition',
  templateUrl: './road-surface-condition.component.html',
  styleUrls: ['./road-surface-condition.component.scss']
})
export class RoadSurfaceConditionComponent implements OnInit {
  roadSurfaces: RoadSurfaceCondition[]=[];

  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private roadSurfaceConditionService:RoadSurfaceConditionsService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.roadSurfaceConditionService.getRoadSurfaceListByLanguage(language).subscribe((roadSurface: any[]) => {
        this.roadSurfaces = roadSurface;

      });});

    this.loadHealthCondition();

  }
  loadHealthCondition()
  {
    this.roadSurfaceConditionService.roadsurfaces$.subscribe(roadSurfaces => {
      this.roadSurfaces = roadSurfaces;

    });

  }


  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Road Surface Condition',
      nzContent:RoadSurfaceModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<RoadSurfaceModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadSurfaceCondition();

  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.roadSurfaceConditionService.updateSelectedRegionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  loadSurfaceCondition()
  {
    this.roadSurfaceConditionService.roadsurfaces$.subscribe(roadSurface => {
      this.roadSurfaces = roadSurface;

    });

  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }
  openDeleteConfirmation(roadSurfaceId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteRoadsurfaceCondition(roadSurfaceId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  deleteRoadsurfaceCondition(roadSurfaceId:number)
  {
    this.roadSurfaceConditionService.delete(roadSurfaceId,'roadSurfaceId').subscribe(
      (response) => {
        // Success logic, if needed
        // Remove the deleted region from the regions array
        const updatedRegions = this.roadSurfaces.filter(surface => surface.roadSurfaceId !== roadSurfaceId);
        this.roadSurfaces = updatedRegions;
      },
      (error) => {
        console.error('Error deleting region:', error);
      }
    );
    this.sucessNotification('data')


  }

}
