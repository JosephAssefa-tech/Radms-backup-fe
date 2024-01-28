import { CityMasterComponent } from './components/city-master/city-master.component';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { RegionComponent } from './components/region/region.component';
import { Router } from '@angular/router';
import { LanguageService } from './services/language-change/language-change-service';
import { VictimDetailService } from './services/victim-details/victim-detail.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  severityData:any[]=[];
  startDate: Date;
  endDate: Date;
  selectedLanguage: string = 'english';
  isAuthenticated=false;
  isCollapsed = false;
  defaultFileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }]

  fileList1 = [...this.defaultFileList];
constructor(private notification: NzNotificationService, private victimDetailService:VictimDetailService, private languageService:LanguageService,private router:Router,private modal: NzModalService, private fb: FormBuilder)
{

}
  selectMenuItem(menuItem: string): void {
    switch(menuItem) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'accident':
        this.router.navigate(['/accident']);
        break;
        case 'accident-data':
        this.router.navigate(['/welcome']);
        break;
        case 'region':
          this.router.navigate(['/region']);
          break;
        case 'zone':
          this.router.navigate(['/zone']);
          break;
          case 'looksup':
            this.router.navigate(['/looksup']);
            break;
      default:
        this.router.navigate(['/welcome']);
        break;
    }
  }
  regionTable(): void {

    this.router.navigate(['/region']);
}
LightConditionTable():void{
  this.router.navigate(['/lightCondition']);

}
zoneTable():void{
  this.router.navigate(['/zone']);
}
woredaTable():void{
  this.router.navigate(['/woreda']);
}
subcityTable():void{
  this.router.navigate(['/subcity']);
}
RoadSurfaceTable():void{
  this.router.navigate(['/roadSurface']);

}
AirTable():void{
  this.router.navigate(['/airCondition']);
}
weatheronditionTable():void{
  this.router.navigate(['/weatherCondition']);
}
healthTable():void{
  this.router.navigate(['/healthCondition'])
}
cityTable():void{
  this.router.navigate(['/city']);

}
roadSurface():void{
  this.router.navigate(['/roadSurfaceCondition']);

}
vechileMaster():void{
  this.router.navigate(['/vechileMaster']);

}
vechileDefect():void{
  this.router.navigate(['/vechileDefect']);

}
vechileMovement():void{
  this.router.navigate(['/vechileMovement']);

}
vechileOwnership():void{
  this.router.navigate(['/vechileOwnership']);

}
highwayMaster():void{
  this.router.navigate(['/highwayMaster']);
}
highwayType():void{
  this.router.navigate(['/highwayType']);
}
junctionType():void{
  this.router.navigate(['/junctionType']);
}

landmarkType():void{
  this.router.navigate(['/landmarkType']);
}
driverLicenseCategory():void{
  this.router.navigate(['/driverLicenseCategory']);
}
roadcariagewayType():void{
  this.router.navigate(['/roadcariagewayType']);
}
educationLevel():void{
  this.router.navigate(['/educationLevel']);
}
driverExperience():void{
  this.router.navigate(['/driverExperience']);
}

accidentCause():void{
  this.router.navigate(['/accidentCause'])
}
accidentType():void{
  this.router.navigate(['/accidentType'])

}
collisionType():void{
  this.router.navigate(['/collisionType'])

}
employmentStatus():void{
  this.router.navigate(['/employmentStatus'])

}
impactType():void{
  this.router.navigate(['/impactType'])
}
licenseLevel():void{
  this.router.navigate(['/licenseLevel'])
}
pavementType():void{
  this.router.navigate(['/pavementType'])
}
pedestrianMovement():void{
  this.router.navigate(['/pedestrianMovement']) 
}
vechileRelation():void{
  this.router.navigate(['/vechileRelation']);

}
vechileServiceAge():void{
  this.router.navigate(['/vechileServiceAge']);

}
speedLimit():void{
  this.router.navigate(['/speedLimit']);

}
seatingType():void{
  this.router.navigate(['/seatingType']);

}
victimType():void{
  this.router.navigate(['/victimType']); 
}
victimMovement():void{
  this.router.navigate(['/victimMovement']); 
}
userType():void{
  this.router.navigate(['/userType']);

}
severityLevel():void{
  this.router.navigate(['/severityLevel']);

}
terianType():void{
  this.router.navigate(['/terianType']);
}

// cityMaster(): void {
//   const modalRef = this.modal.create({
//     nzTitle: 'City Master ',
//     nzContent: CityMasterComponent,
//     nzFooter: null
//   });
// }
switchLanguage(language: string) {
  this.languageService.selectedLanguage = language;

}
// getTranslation(key: string): string {
//   // return this.languageService.getTranslation(key);
//   return 's'
// }

vechileTable()
{
  this.router.navigate(['/vechileMaster']);
}
// onFilterClick() {
//   // Handle the search button click event
//   // You can use the startDate and endDate values to make an API call or perform any desired action
//   console.log('Start Date:', this.startDate);
//   console.log('End Date:', this.endDate);
//   // Call your API or perform other actions here
//   this.victimDetailService.getGroupedData().subscribe(data=>{
//     this.severityData  = data;

//   })
// }

onFilterButtonClick(startDate: Date, endDate: Date): void {
  if (!startDate || !endDate) {
    this.notification.warning('Missing Dates', 'Please select both start and end dates.');
    return;
  }

  this.victimDetailService.setDateFilter(startDate, endDate);
}
 getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

}
