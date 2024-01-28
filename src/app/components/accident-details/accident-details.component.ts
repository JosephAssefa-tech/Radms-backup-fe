import {  Validators } from '@angular/forms';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccidentCause } from 'src/app/models/get/accident-detail-model';
import { AccidentDetailServiceService } from 'src/app/services/accident-service/accident-detail-service.service';
import { AccidentDetailsTransactionService } from 'src/app/services/accident-details-transaction/accident-details-transaction.service';
import { AccidentType } from 'src/app/models/get/accident-type';
import { AccidentTypeService } from 'src/app/services/accident-types/accident-type.service';
import { AirConditionType } from 'src/app/models/get/air-condition';
import { AirconditionService } from 'src/app/services/air-condition/aircondition.service';
import { CityMaster } from 'src/app/models/get/city';
import { CityService } from 'src/app/services/city/city.service';
import { CollisionType } from 'src/app/models/get/collision-type';
import { CollisionTypeService } from 'src/app/services/collision-types/collision-type.service';
import { FormsBaseStateService } from 'src/app/services/base-service/FormsBaseStateService';
import { HighwayMaster } from 'src/app/models/get/highway-master';
import { HighwayMasterService } from 'src/app/services/highway-master/highway-master.service';
import { HighwayType } from 'src/app/models/get/highway-type';
import { HighwayTypeService } from 'src/app/services/highway-type/highway-type.service';
import { ImpactType } from 'src/app/models/get/impact-type';
import { ImpactTypeService } from 'src/app/services/impact-types/impact-type.service';
import { JunctionType } from 'src/app/models/get/junction-type';
import { JunctionTypeService } from 'src/app/services/junction-types/junction-type.service';
import { LandmarkType } from 'src/app/models/get/landmark-type';
import { LandmarkTypeService } from 'src/app/services/landmark-types/landmark-type.service';
import { LightCondition } from 'src/app/models/get/light-condition';
import { LightConditionService } from 'src/app/services/light-conditions/light-condition.service';
import { MapService } from 'src/app/services/map-services/map.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PavementType } from 'src/app/models/get/pavement-type';
import { PavementTypeService } from 'src/app/services/pavement-type/pavement-type.service';
import { PoliceStation } from 'src/app/models/get/police-station';
import { PoliceStationService } from 'src/app/services/police-service/police-station.service';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { RegionsService } from 'src/app/services/region/regions.service';
import { RoadCarriageway } from 'src/app/models/get/road-carriageway';
import { RoadCarriagewayService } from 'src/app/services/road-carriageway/road-carriageway.service';
import { RoadSurfaceCondition } from 'src/app/models/get/road-surface-condition';
import { RoadSurfaceConditionsService } from 'src/app/services/road-surface-condition/road-surface-conditions.service';
import { Router } from '@angular/router';
import { SeverityLevel } from 'src/app/models/get/severity-level';
import { SeverityLevelService } from 'src/app/services/severity-level/severity-level.service';
import { SpeedLimit } from 'src/app/models/get/speed-limit';
import { SpeedLimitService } from 'src/app/services/speed-limit/speed-limit.service';
import { SubCityMaster } from 'src/app/models/get/subcity';
import { SubCityService } from 'src/app/services/sub-city/sub-city.service';
import { TerrainType } from 'src/app/models/get/terrain-type';
import { TerrianTypeService } from 'src/app/services/terrian-type/terrian-type.service';
import { UserMaster } from 'src/app/models/get/user-master';
import { UserMasterService } from 'src/app/services/user-master/user-master.service';
import { WeatherCondition } from 'src/app/models/get/weather-condition-model';
import { WeatherConditionService } from 'src/app/services/weather-condition/weather-condition.service';
import { WoredaMaster } from 'src/app/models/get/woreda';
import { WoredaMasterService } from 'src/app/services/woreda-service/woreda-master.service';
import { ZoneMaster } from 'src/app/models/get/zone';
import { ZoneMasterService } from 'src/app/services/zone-service/zone-master.service';
import { AccidentDetailsTransaction } from 'src/app/models/get/accident-details-transaction';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LanguageService } from 'src/app/services/language-change/language-change-service';

@Component({
  selector: 'app-accident-details',
  templateUrl: './accident-details.component.html',
  styleUrls: ['./accident-details.component.scss']
})
//create an angular car accident data management system?
export class AccidentDetailsComponent implements OnInit {
  options$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  polices$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  regionMasters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  zoneMasters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  woredaMasters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cityMasters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  subCityList$ :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  accidentTypes$ :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  weatherConditions$ :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  accidentSeverity$  :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  highwayNames$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  highwayTypes$  :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  pavementTypes$   :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  collisionTypes$ :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  impactTypes$   :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  roadSurfaces$  :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  landMarkTypes$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  roadCarriagewayTypes$  :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  junctionTypes$   :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  roadspeeds$  :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  lightConditions$   :BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  airConditions$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  terrianTypes$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);




  selectedOption: any;
  policeOption:any;
  regionId:any;

  //currentLanguage = 'english';
  myForm = new FormGroup({
    userID:new FormControl(1),
    lat:new FormControl('',Validators.required),
    long:new FormControl('',Validators.required),
    dateAndTime: new FormControl('',Validators.required),
    piname:new FormControl('',Validators.required),
    policeRecordNumber: new FormControl('',Validators.required),
    psid: new FormControl('',Validators.required),


    regionId: new FormControl('',Validators.required),
    zoneId: new FormControl('',Validators.required),
    woredaId: new FormControl('',Validators.required),
    cityId: new FormControl('',Validators.required),


    subCityId: new FormControl('',Validators.required),
    kebeleName: new FormControl('',Validators.required),
    accidentTypeId: new FormControl('',Validators.required),
    weatherCondId: new FormControl('',Validators.required),

    severityId: new FormControl('',Validators.required),
    hid: new FormControl('',Validators.required),
    pavementTypeId: new FormControl('',Validators.required),
    collisionTypeId:new FormControl('',Validators.required),

    impactTypeId:new FormControl('',Validators.required),
    roadSurfaceId: new FormControl('',Validators.required),
    landmarkTypeId: new FormControl('',Validators.required),
    roadCarriagewayId: new FormControl('',Validators.required),
    junctionTypeId: new FormControl('',Validators.required),

    speedLimitId: new FormControl('',Validators.required),
    lightCondtionId: new FormControl('',Validators.required),
    airConditionId: new FormControl('',Validators.required),
    terrianTypeId:new FormControl('',Validators.required),
    causeofAccidentId: new FormControl('',Validators.required),
    accidentLocalName: new FormControl('',Validators.required),


    propertyDamage: new FormControl('',Validators.required),
    numberOfVehicles: new FormControl('',Validators.required),
    numberofVictims: new FormControl('',Validators.required),
    highwayTypeId:new FormControl('',Validators.required)
  });

  latitude:number | undefined;
 longtude:number | undefined;




  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';
  accidentDetail=[] as AccidentCause[];
  accidnentDetailTransaction={} as  AccidentDetailsTransaction;
  weatherConditions=[] as WeatherCondition[];
  userMasters=[] as UserMaster[];
  policeStations=[] as PoliceStation[];
  subCityList=[] as SubCityMaster[];
  regionMasters=[] as RegionMaster[];
  zoneMasters=[] as  ZoneMaster[];
  woredaMasters=[] as WoredaMaster[];
  cityMasters=[] as CityMaster[];
  accidentTypes=[] as AccidentType[];
  collisionTypes=[] as CollisionType[];
  impactTypes=[] as ImpactType[];
  accidentSeverity=[] as SeverityLevel[];
  highwayNames=[] as HighwayMaster[];
  highwayTypes=[] as HighwayType[];
  pavementTypes=[] as PavementType[];
  roadSurfaces=[] as RoadSurfaceCondition[];
  landMarkTypes=[] as LandmarkType[];
roadCarriagewayTypes=[] as RoadCarriageway[];
lightConditions=[] as LightCondition[];
airConditions=[] as AirConditionType[];
junctionTypes=[] as JunctionType[];
roadspeeds=[] as SpeedLimit[];
accidentCauses=[] as AccidentCause[];
terrianTypes=[] as TerrainType[];



id:any;
idd:any;
//ps?:PoliceStation = undefined;
lat:any;
long:any;
dateAndTime: any;
piname:any;
policeRecordNumber: any;
psid: any;



zoneId: any;
woredaId: any;
cityId: any;


subCityId: any;
kebeleName: any;
accidentTypeId: any;
weatherCondId: any;

severityId:any;
hid: any;
pavementTypeId: any;
collisionTypeId:any;

impactTypeId:any;
roadSurfaceId: any;
landmarkTypeId: any;
roadCarriagewayId: any;
junctionTypeId: any;

speedLimitId: any;
lightCondtionId: any;
airConditionId: any;
terrianTypeIdd:any;
causeofAccidentId:any;
accidentLocalName: any;

highwayTypeId:any;
propertyDamage:any;
numberOfVehicles: any;
numberofVictims: any;





   form:FormGroup;

  constructor(
    private languageService:LanguageService,
    private formService:FormsBaseStateService,
    public mapService:MapService,
    private userMasterService:UserMasterService,
    private subCityService:SubCityService,
    private policeStationService:PoliceStationService,
    private accidentService:AccidentDetailServiceService,
    private accidentDetailTransactionService:AccidentDetailsTransactionService,
    private regionService:RegionsService,
    private zoneService:ZoneMasterService,
    private woredaService:WoredaMasterService,
    private cityMasterService:CityService,
    private accidentTypeService:AccidentTypeService,
    private accidentSeverityService:SeverityLevelService,
    private highwayService:HighwayMasterService,
    private highwayTypesService:HighwayTypeService,
    private pavementService:PavementTypeService,
    private roadSurfaceService:RoadSurfaceConditionsService,
    private landMarkTypeService:LandmarkTypeService,
    private roadCarriwageService:RoadCarriagewayService,
    private ligtConditionService:LightConditionService,
    private airConditionService:AirconditionService,
    private junctionTypeService:JunctionTypeService,
    private roadSpeedService:SpeedLimitService,
    private accidentCauseServices:AccidentDetailServiceService,
    private route:Router,
    private impactService:ImpactTypeService,
    private weatherService:WeatherConditionService,
    private notification:NzNotificationService,
    private terianService:TerrianTypeService,
    private collisionService:CollisionTypeService,
    public fb:FormBuilder

    ) {
this.form=this.fb.group({
  dateAndTime:['']}
  );




    }
    isFormValid(): boolean {
      return this.myForm.valid;
    }

  ngOnInit(): void {
this.languageService.selectedLanguage$.subscribe(language => {
  this.GetAccidentDetail(language);
  this.GetPoliceStatioin(language);
  this.GetRegionMaster(language);
  this.GetZoneMaster(language);
  this.GetWoredaMaster(language);
  this.GetCityMaster(language);
  this.GetSubCityMaster(language);
  this.GetAccidentType(language)
  this.GetWeatherCondition(language);
  this.GetAccidentSeverity(language);
  this.GetHighwayNames(language);
this.GetHighwayTypes(language);
this.GetImpactTypes(language);
this.GetLandmarkTypes(language);
this.GetRoadCarriageTypes(language);
this.GetLightCondition(language);
this.GetAirConditiion(language);
this.GetJunctionTypes(language);
this.GetRoadSpeeds(language);
// this.GetAccidentCauses(language);
this.GetTerrianTypes(language);
this.GetPavementTypes(language);
this.GetRoadSurfaces(language);
this.GetCollisionType(language);
});


    this.GetStateFormValue();
    this.GetLatitude();
    this.GetLongtitude();
// this.GetCollisionType();
//this.GetAccidentDetail();
//this.GetWeatherCondition();

// this.GetSubCityMaster();
//this.GetRegionMaster();
// this.GetZoneMaster();
// this.GetWoredaMaster();
// this.GetCityMaster();
//this.GetAccidentType();
// this.GetAccidentSeverity();
// this.GetHighwayNames();
// this.GetHighwayTypes();
//this.GetPavementTypes();
//this.GetRoadSurfaces();
this.GetUserType();
// this.GetImpactTypes();
// this.GetLandmarkTypes();
// this.GetRoadCarriageTypes();
// this.GetLightCondition();
// this.GetAirConditiion();
// this.GetJunctionTypes();
// this.GetRoadSpeeds();
// this.GetAccidentCauses();
// this.GetTerrianTypes();

  }

  GetStateFormValue()
  {
    this.formService.getFormValues().subscribe(values=>{
      this.lat=values.lat;
      this.long=values.long;

      this.piname=values.piname;
      this.policeRecordNumber=values.policeRecordNumber;
      this.psid= values.psid;


      this.regionId=values.regionId;
      this.zoneId=values.zoneId;
      this.woredaId=values.woredaId;
      this.cityId=values.cityId;


      this.subCityId=values.subCityId;
      this.kebeleName=values.kebeleName;
      this.accidentTypeId=values.accidentTypeId;
      this.weatherCondId=values.weatherCondId;

      this.severityId=values.severityId;
      this.hid=values.hid;
      this.pavementTypeId=values.pavementTypeId;
      this.collisionTypeId=values.collisionTypeId;

      this.impactTypeId=values.impactTypeId;
      this.roadSurfaceId=values.roadSurfaceId;
      this.landmarkTypeId=values.landmarkTypeId;
      this.roadCarriagewayId=values.roadCarriagewayId;
      this.junctionTypeId=values.junctionTypeId;

      this.speedLimitId=values.speedLimitId;
      this.lightCondtionId=values.lightCondtionId;
      this.airConditionId=values.airConditionId;
      this.terrianTypeIdd=values.terrianTypeIdd;
      this.causeofAccidentId=values.causeofAccidentId;
      this.accidentLocalName=values.accidentLocalName;

      this.dateAndTime=values.dateAndTime;
      this.propertyDamage=values.propertyDamage;
      this.numberOfVehicles=values.numberOfVehicles;
      this.numberofVictims=values.numberofVictims;
    })


  }

  GetLatitude()
  {

    this.myForm.patchValue({
      lat: this.mapService.latValue,
    })
  this.latitude= this.mapService.latValue;


  }
  GetLongtitude()
  {
    this.myForm.patchValue({
      long: this.mapService.longValue,
    })
    this.longtude= this.mapService.longValue;
  }

  sucessNotification(type:string):void{
    this.notification.success("Data Saved Successfully","",{nzPlacement:'topRight'});
  }
  errorNotification(type:string):void{
    this.notification.error("Data was not Saved",'',{nzPlacement:'topRight'})
  }

  // OnPoliceStationSelected()
  // {

  //   this.selectedSubCity=this.selectedPoliceStation?.subCity ;
  //   this.selectedSubCityId=this.selectedSubCity?.subCityId??0;
  //   console.log(this.selectedSubCity);

  // }
  GetImpactTypes(language:string)
  {
    this.impactService.getAllByLanguage(language).subscribe(
      (response) => {
        this.impactTypes$.next(response);
        // Reset the selected option when the options change
        this.impactTypeId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetRegionMaster(lanugage:string)
  {
    this.regionService.getAllByLanguage(lanugage).subscribe(
      (response) => {
        this.regionMasters$.next(response);
        // Reset the selected option when the options change
        this.regionId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );


  }
  GetZoneMaster(language:string)
  {
    this.zoneService.getAllByLanguage(language).subscribe(
      (response) => {
        this.zoneMasters$.next(response);
        // Reset the selected option when the options change
        this.zoneId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetWoredaMaster(language:string)
  {
    this.woredaService.getAllByLanguage(language).subscribe(
      (response) => {
        this.woredaMasters$.next(response);
        // Reset the selected option when the options change
        this.woredaId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetCityMaster(language:string)
  {
    this.cityMasterService.getAllByLanguage(language).subscribe(
      (response) => {
        this.cityMasters$.next(response);
        // Reset the selected option when the options change
        this.cityId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetAccidentDetail(language: string)
  {
    this.accidentService.getAllByLanguage(language).subscribe(
      (response) => {
        this.options$.next(response);
        // Reset the selected option when the options change
        this.selectedOption = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetAccidentType(language:string)
  {
    this.accidentTypeService.getAllByLanguage(language).subscribe(
      (response) => {
        this.accidentTypes$.next(response);
        // Reset the selected option when the options change
        this.accidentTypeId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetLandmarkTypes(language:string)
  {
    this.landMarkTypeService.getAllByLanguage(language).subscribe(
      (response) => {
        this.landMarkTypes$.next(response);
        // Reset the selected option when the options change
        this.landmarkTypeId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetRoadCarriageTypes(language:string)
  {
    this.roadCarriwageService.getAllByLanguage(language).subscribe(
      (response) => {
        this.roadCarriagewayTypes$.next(response);
        // Reset the selected option when the options change
        this.roadCarriagewayId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetCollisionType(language:string)
  {
    this.collisionService.getAllByLanguage(language).subscribe(
      (response) => {
        this.collisionTypes$.next(response);
        // Reset the selected option when the options change
        this.collisionTypeId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetAccidentSeverity(language:string)
  {
    this.accidentSeverityService.getAllByLanguage(language).subscribe(
      (response) => {
        this.accidentSeverity$.next(response);
        // Reset the selected option when the options change
        this.severityId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetHighwayNames(language:string)
  {
    this.highwayService.getAllByLanguage(language).subscribe(
      (response) => {
        this.highwayNames$.next(response);
        // Reset the selected option when the options change
        this.hid = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetHighwayTypes(language:string)
  {
    this.highwayTypesService.getAllByLanguage(language).subscribe(
      (response) => {
        this.highwayTypes$.next(response);
        // Reset the selected option when the options change
        this.highwayTypeId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );

  }
  GetPavementTypes(language:string)
  {
    this.pavementService.getAllByLanguage(language).subscribe(
      (response) => {
        this.pavementTypes$.next(response);
        // Reset the selected option when the options change
        this.pavementTypeId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetRoadSurfaces(language:string)
  {
    this.roadSurfaceService.getAllByLanguage(language).subscribe(
      (response) => {
        this.roadSurfaces$.next(response);
        // Reset the selected option when the options change
        this.roadSurfaceId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
  GetLightCondition(language:string){
    this.ligtConditionService.getAllByLanguage(language).subscribe(
      (response) => {
        this.lightConditions$.next(response);
        // Reset the selected option when the options change
        this.lightCondtionId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );

  }
GetAirConditiion(language:string){
  this.airConditionService.getAllByLanguage(language).subscribe(
    (response) => {
      this.airConditions$.next(response);
      // Reset the selected option when the options change
      this.airConditionId = null;
    },
    (error) => {
      console.error('Error retrieving data:', error);
    }
  );

}
GetJunctionTypes(language:string){
  this.junctionTypeService.getAllByLanguage(language).subscribe(
    (response) => {
      this.junctionTypes$.next(response);
      // Reset the selected option when the options change
      this.junctionTypeId = null;
    },
    (error) => {
      console.error('Error retrieving data:', error);
    }
  );

}
GetRoadSpeeds(language:string){
  this.roadSpeedService.getAllByLanguage(language).subscribe(
    (response) => {
      this.roadspeeds$ .next(response);
      // Reset the selected option when the options change
      this.speedLimitId = null;
    },
    (error) => {
      console.error('Error retrieving data:', error);
    }
  );

}
// GetAccidentCauses()
// {
//   this.accidentCauseServices.getAll().subscribe((response)=>{
//     this.accidentCauses=response;
//   })
// }
  GetWeatherCondition(language:string)
  {
    this.weatherService.getAllByLanguage(language)
    .subscribe(
      (response) => {
        this.weatherConditions$.next(response);
        // Reset the selected option when the options change
        this.weatherCondId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );

  }

  GetPoliceStatioin(language:string)
  {
    this.policeStationService.getAllByLanguage(language)
    .subscribe(
      (response) => {
        this.polices$.next(response);
        // Reset the selected option when the options change
        this.policeOption = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );

  }
  GetSubCityMaster(language:string)
  {
    this.subCityService.getAllByLanguage(language)
    .subscribe(
      (response) => {
        this.subCityList$.next(response);
        // Reset the selected option when the options change
        this.subCityId = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );

  }
  GetTerrianTypes(language:string)
  {
    this.terianService.getAllByLanguage(language)
    .subscribe(
      (response) => {
        this.terrianTypes$.next(response);
        // Reset the selected option when the options change
        this.terrianTypeIdd = null;
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );



  }
  GetUserType()
  {
    this.userMasterService.getAll().subscribe((response)=>{
      this.userMasters=response;
    })

  }

  WelcomePage()
  {
    this.errorNotification('error');
    this.route.navigate(['/welcome']);

  }


  RoadInvolvedPage(){
    this.route.navigate(['/roadInvolved']);

  }


 onSubmit(){
//the below is for vechile
  this.accidentDetailTransactionService.number = this.numberOfVehicles;


  const formData = this.myForm.value ;
  this.accidentDetailTransactionService.updateNumberOfForms(this.numberOfVehicles);
  this.formService.setFormValues(formData);



   this.accidentDetailTransactionService.post(this.myForm.value).subscribe((response:any) => {
    this.accidentDetailTransactionService.setNewRecordId(response.data.accidentDetailId);
    console.log("consoloingggg number of Reoadddd")
    console.log(response.data.numberOfRoad)
    if(response.data.numberOfRoad<=0)
    {

      console.log(response.data.numberOfRoad)
      this.route.navigate(['/vehicle']);
    }
    this.accidentDetailTransactionService.NoumberOfRoads=response.data.numberOfRoad;


   });
console.log("hooj")
console.log( this.accidentDetailTransactionService.accidentDetailGlobalId);
console.log("jiji")
  this.sucessNotification('data');

  this.route.navigate(['/roadInvolved']);

 }
//  switchLanguage(language: string) {
//   this.languageService.selectedLanguage = language;

// }
  }






