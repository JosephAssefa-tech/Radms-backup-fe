import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { VictimTypeService } from 'src/app/services/victim-type/victim-type.service';
import { VictimTypeLookup } from 'src/app/models/get/victim-type-lookup';
import { VehiclesEntity } from 'src/app/models/get/vehicles';
import { VehicleListService } from 'src/app/services/vehicles-service/vehicle-list.service';
import { EmploymentStatus } from 'src/app/models/get/employment-status';
import { EmployementStatusService } from 'src/app/services/employment-status/employement-status.service';
import { SeverityLevel } from 'src/app/models/get/severity-level';
import { SeverityLevelService } from 'src/app/services/severity-level/severity-level.service';
import { HealthCondition } from 'src/app/models/get/health-condition';
import { HealthConditiionService } from 'src/app/services/health-condition/health-conditiion.service';
import { VictimMovementMaster } from 'src/app/models/get/victim-movement-master';
import { VictimMovementService } from 'src/app/services/victim-movement/victim-movement.service';
import { SeatingType } from 'src/app/models/get/seating-type';
import { SeatingTypeService } from 'src/app/services/seating-type/seating-type.service';
import { PedestrianMovement } from 'src/app/models/get/pedestrian-movement';
import { PedestrainMovementService } from 'src/app/services/pedestrain-movements/pedestrain-movement.service';
import { VechicleMasterEntity } from 'src/app/models/get/vechicle-master';
import { VechileMasterService } from 'src/app/services/vechile-masters/vechile-master.service';
import { VictimDetailService } from 'src/app/services/victim-details/victim-detail.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { RecordCompletionDialogComponent } from 'src/app/shared/record-completion-dialog/record-completion-dialog.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-victim-details',
  templateUrl: './victim-details.component.html',
  styleUrls: ['./victim-details.component.scss']
})
export class VictimDetailsComponent implements OnInit {
  count = 1;
  accidentSeverity$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

   customId: string | undefined;
   lastThreeDigits = '000';

  selectedVictimType?:any;
  victimName?:string;
  selectedGender?:number=0;
  age?:number;
  severityId:any;
  selectedVehicle?:any;
  selectedEmploymentStatus?:any;
  selectedAccidentSeverity?:any;
  selectedHealthCondition?:any;
  selectedVictimMovement?:any;
  selectedSeatingType?:any;
  selectedPedestrianMovement?:any;
  airbag?:number=0;
  seatbelt?:number=0;
  heilmet?:number=0;


  myForm = new FormGroup({
    accidentId: new FormControl(''),
    severityId: new FormControl(''),
    victimId:new FormControl(''),//v+accidentId000/001/002
    victimName: new FormControl(''),
    age: new FormControl(''),
    genderType: new FormControl(''),
    victimMovementId: new FormControl(''),
    victimTypeId: new FormControl(''),
    employmentStatusId: new FormControl(''),
    seatBeltUsed:new FormControl(''),
   // vehicleControl: new FormControl(''),
   airbagDeployed:new FormControl(''),
    helmetUsed:new FormControl(''),
    healthConditionId: new FormControl(''),
    pedestrianMovementId: new FormControl(''),
    //accidentSeverityControl: new FormControl(''),
    seatingTypeId: new FormControl(''),



  });
  // {Fngonit

  //   "victimId": "jo1",
  //   "victimName": "jo",
  //   "age": 1,
  //   "genderType": 1,
  //   "victimMovementId": 1,

  //   "victimTypeId": 1,
  //   "employmentStatusId": 1,
  //   "seatBeltUsed": 1,

  //   "airbadDeployed": 1,
  //   "helmetUsed": 1,
  //   "healthConditionId": 1,
  //   "pedestrianMovementId": 1,
  //   "seatingTypeId": 1
  // }

  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  victimTypes=[] as VictimTypeLookup[];
  //vehicle=[] as VehiclesEntity[];
  vehicle=[]  as VechicleMasterEntity[];
  employmentStatus=[] as EmploymentStatus[];
  accidentSeverity=[] as SeverityLevel[];
  healthConditions=[] as HealthCondition[];
  victimMovement=[] as VictimMovementMaster[];
  seatingType=[] as SeatingType[];
  pedestrianMovement=[] as PedestrianMovement[];

  value?: string;
   form:FormGroup;

  constructor(
    private languageService:LanguageService,
    private accidentDetailTransactionService:AccidentDetailsTransactionService,
    private modal: NzModalService,
    private victimTypeService:VictimTypeService,
    private vehicleService:VehicleListService,
    private victimDetail:VictimDetailService,
    private employmentStatusService:EmployementStatusService,
    private accidentSeverityService:SeverityLevelService,
    private healthConditionService:HealthConditiionService,
    private victimMovementService:VictimMovementService,
    private seatingTypeService:SeatingTypeService,
    private pedestrianMovementService:PedestrainMovementService,
    private vechileMasterService:VechileMasterService,


    private route:Router,
    private notification:NzNotificationService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateTime:['']}
  );


    }

  ngOnInit(): void {
    this.languageService.selectedLanguage$.subscribe(language => {
      this.GetAccidentSeverityDetail(language);


    });

    this.accidentDetailTransactionService.getNewRecordId().subscribe(id => {
      if (id) {
        // Set the newly created record's ID in the form
        this.myForm.patchValue({ accidentId: id,victimId:'VI'+id });
      }
    });

    this.GetAccidentSeverity();
this.GetVictimTypeDetail();
//this.GetAccidentSeverityDetail();
this.GetEmploymentStatusDetail();
this.GetHealthConditionDetail();
this.GetPedestrianMovementDetail();
this.GetSeatingTypeDetail();
this.GetVehicleDetail();
this.GetVictimMovementDetail();
  }
  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }
  GetAccidentSeverity()
  {
    this.accidentSeverityService.getAll().subscribe((response)=>{
      this.accidentSeverity=response;
    })
  }

  GetVictimTypeDetail()
  {
    this.victimTypeService.getAll().subscribe((response:VictimTypeLookup[])=>{
      this.victimTypes=response;
    });
  }



  GetVehicleDetail()
  {
   // this.vehicleService.getAll().subscribe((response:VehiclesEntity[])=>{
    this.vechileMasterService.getAll().subscribe((response)=>{
      this.vehicle=response;
    });
  }



  GetEmploymentStatusDetail()
  {
    this.employmentStatusService.getAll().subscribe((response:EmploymentStatus[])=>{
      this.employmentStatus=response;
    });
  }


  GetAccidentSeverityDetail(language:string)
  {
    this.accidentSeverityService.getAllByLanguage(language)
    .subscribe(
      (response) => {
        this.accidentSeverity$ .next(response);
        // Reset the selected option when the options change
        this.severityId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }




  GetHealthConditionDetail()
  {
    this.healthConditionService.getAll().subscribe((response:HealthCondition[])=>{
      this.healthConditions=response;
    });
  }



  GetVictimMovementDetail()
  {
    this.victimMovementService.getAll().subscribe((response:VictimMovementMaster[])=>{
      this.victimMovement=response;
    });
  }



  GetSeatingTypeDetail()
  {
    this.seatingTypeService.getAll().subscribe((response:SeatingType[])=>{
      this.seatingType=response;
    });
  }

  GetPedestrianMovementDetail()
  {
    this.pedestrianMovementService.getAll().subscribe((response:PedestrianMovement[])=>{
      this.pedestrianMovement=response;
    });
  }





  AccidentPage()
  {
    this.errorNotification('error');
    this.route.navigate(['/vehicle']);

  }

  VictimDetailPage(){
    // this.route.navigate(['/victim']);

  }
  // submitForm()
  // {
  //  var formData:any=new FormData();
  //  formData.append("dateTime",this.form.get('dateTime').value);

 //// }
 onSubmit(){

  const record = { ...this.myForm.value, accidentId: this.myForm.value.accidentId,victimId:this.myForm.value.victimId };
  console.log("submitting a form")
  this.victimDetail.post(record).subscribe(response => {
    console.log(response);
  });
  if (this.count < this.accidentDetailTransactionService.number) {
    // reset the form here
    this.myForm.reset();
    this.count++;
  } else {
    this.showModal();
    // navigate to other page
    this.route.navigate(['/home']);
  }
  console.log("submitting a form")
 }
 showModal(): void {

  const modalRef = this.modal.create({
    nzContent: RecordCompletionDialogComponent,
    nzFooter: null,
    nzOnOk: () => {
      // This function will be called when the user clicks the OK button in the modal
      // You can perform any necessary actions here, such as closing the modal
      modalRef.destroy();


    }

  });


}

}
