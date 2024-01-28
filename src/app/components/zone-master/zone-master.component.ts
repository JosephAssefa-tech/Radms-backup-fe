import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ZoneMaster } from 'src/app/models/get/zone';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';
import { SharedModalComponent } from 'src/app/shared/shared-modal/shared-modal.component';
import { ZoneModalComponent } from 'src/app/shared/zone-modal/zone-modal.component';

@Component({
  selector: 'app-zone-master',
  templateUrl: './zone-master.component.html',
  styleUrls: ['./zone-master.component.scss']
})
export class ZoneMasterComponent implements OnInit {
  zones: ZoneMaster[]=[];

  constructor(private sharedbuttonService: SharedButtonLabelService,private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private zoneService:ZoneMasterService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.zoneService.getZonesListByLanguage(language).subscribe((zoness: any[]) => {
        this.zones = zoness;

      });});
      this.loadZones();
      // switchLanguage(language: string): void {
      //   this.translationService.setLanguage(language).subscribe(() => {
      //     // Update the translations after switching the language
      //     // You may need to reload the current component or use change detection if necessary
      //   });
      // }
  }
  loadZones()
  {
    this.zoneService.zones$.subscribe(regions => {
      this.zones = regions;

    });

  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Zone Master',
      nzContent: ZoneModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();
      }
    });
  }
  editZone(rowData:  any) {
    this.zoneService.update(rowData);
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.zoneService.updateSelectedZoneRowData(rowData);
    this.showModal('Update Zone');
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
  deleteZone(zoneId:number)
  {
    this.zoneService.delete(zoneId,'zoneId').subscribe(
      (response) => {
        // Success logic, if needed
        // Remove the deleted region from the regions array
        const updatedRegions = this.zones.filter(zone => zone.zoneId !== zoneId);
        this.zones = updatedRegions;
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
