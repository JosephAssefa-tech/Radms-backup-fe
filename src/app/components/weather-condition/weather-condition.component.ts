import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { WeatherCondition } from 'src/app/models/get/weather-condition-model';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RegionsService } from 'src/app/services/region/regions.service';
import { SharedButtonLabelService } from 'src/app/services/shared-modal-button/shared-modal-button.service';
import { WeatherConditionService } from 'src/app/services/weather-condition/weather-condition.service';
import { SharedModalComponent } from 'src/app/shared/shared-modal/shared-modal.component';
import { WeatherConditionModalComponent } from 'src/app/shared/weather-condition-modal/weather-condition-modal.component';

@Component({
  selector: 'app-weather-condition',
  templateUrl: './weather-condition.component.html',
  styleUrls: ['./weather-condition.component.scss']
})
export class WeatherConditionComponent implements OnInit {
  weathers: WeatherCondition[]=[];

  private regionsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public weathers$ = this.regionsSubject.asObservable();

  constructor(private sharedbuttonService: SharedButtonLabelService, private notification:NzNotificationService, private languageService:LanguageService,private fb: FormBuilder,private modal: NzModalService,private weatherService:WeatherConditionService) { }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.weatherService.getWeathersListByLanguage(language).subscribe((weather: any[]) => {
        this.weathers = weather;
        console.log(this.weathers);
      });});

    this.loadWeathers();
  }
  loadWeathers()
  {
    this.weatherService.weathers$.subscribe(weathers => {
      this.weathers = weathers;

    });

  }
  showModal(action: string): void {
    this.sharedbuttonService.setButtonLabel(action);
    const modalRef = this.modal.create({
      nzTitle: 'Weather Condition Types',
      nzContent:WeatherConditionModalComponent,
      nzFooter: null,
      nzOnOk: () => {
        // This function will be called when the user clicks the OK button in the modal
        // You can perform any necessary actions here, such as closing the modal
        modalRef.destroy();

      },
      nzComponentParams: {
        action: action // Pass the action to the modal component
      } as Partial<WeatherConditionModalComponent> // Type assertion to Partial<SharedModalComponent>

    });


    this.weatherConditions();

  }
  onEditRow(rowData: any): void {
    console.log("update the lable here")
    this.sharedbuttonService.setButtonLabel('Update');
    this.weatherService.updateSelectedRegionRowData(rowData);
    this.showModal('Edit');
    // Open the modal component
    // ...
  }
  openDeleteConfirmation(weatherId: number) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure you want to delete this region?',
      nzOkText: 'Yes',
      nzOkType: 'danger' as NzButtonType,
      nzCancelText: 'No',
      nzClassName: 'custom-confirm-modal',
      nzOnOk: () => {
        this.deleteWeather(weatherId);
      },
      nzOnCancel: () => {
        this.errorNotification('data');
      }
    });
  }
  weatherConditions()
  {
    this.weatherService.weathers$.subscribe(weathers => {
      this.weathers = weathers;

    });

  }
  sucessNotification(type:string):void{
    this.notification.success("Data Deleted Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Deleted",'',{nzPlacement:'topRight'})
  }
  deleteWeather(weatherId:number)
  {
    this.weatherService.delete(weatherId,'weatherCondId').subscribe(
      (response) => {
        // Success logic, if needed
        // Remove the deleted region from the regions array
        const updatedWeathers = this.weathers.filter(weather => weather.weatherCondId !== weatherId);
        this.weathers = updatedWeathers;
      },
      (error) => {
        console.error('Error deleting region:', error);
      }
    );
    this.sucessNotification('data')


  }

}
