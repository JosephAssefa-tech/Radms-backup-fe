import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzModalService  } from 'ng-zorro-antd/modal';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { SharedModalComponent } from 'src/app/shared/shared-modal/shared-modal.component';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { RegionsService } from 'src/app/services/region/regions.service';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  @Output() buttonLabelChanged: EventEmitter<string> = new EventEmitter<string>();

  // private regionsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // public regions$ = this.regionsSubject.asObservable();
  regions: RegionMaster[]=[];

  inputValue: string | undefined;
  regionMaster=[] as RegionMaster[];


  validateForm!: FormGroup;

  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private regionService:RegionsService) {}

  ngOnInit(): void {


    this.languageService.selectedLanguage$.subscribe(language => {
      this.regionService.getRegionsListByLanguage(language).subscribe((regions: any[]) => {
        this.regions = regions;
        console.log(this.regions);
      });});

    this.loadRegions();

  }
  loadRegions()
  {
    this.regionService.regions$.subscribe(regions => {
      this.regions = regions;

    });

  }
  submitForm(): void {
    // Do something with the form data here
  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Region Master',
      nzContent: SharedModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<SharedModalComponent> // Type assertion to Partial<SharedModalComponent>

    });

    this.loadRegions();

  }
  openDeleteConfirmation(regionId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteRegion(regionId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.regionService.updateSelectedRegionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  deleteRegion(regionId:number)
{
  this.regionService.delete(regionId,'regionId').subscribe(
    (response) => {
      // Success logic, if needed
      // Remove the deleted region from the regions array
      const updatedRegions = this.regions.filter(region => region.regionId !== regionId);
      this.regions = updatedRegions;
    },
    (error) => {
      console.error('Error deleting region:', error);
    }
  );
  this.sucessNotification('data')


}
  editRegion(regionId: number) {
    this.regionService.update(regionId);
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }
}
