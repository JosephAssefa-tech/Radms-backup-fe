import { AccidentCause } from "./accident-detail-model";
import { AccidentType } from "./accident-type";
import { AirConditionType } from "./air-condition";
import { CityMaster } from "./city";
import { CollisionType } from "./collision-type";
import { HighwayMaster } from "./highway-master";
import { HighwayType } from "./highway-type";
import { ImpactType } from "./impact-type";
import { JunctionType } from "./junction-type";
import { LandmarkType } from "./landmark-type";
import { LightCondition } from "./light-condition";
import { PavementType } from "./pavement-type";
import { PoliceStation } from "./police-station";
import { RegionMaster } from "./region";
import { RoadCarriageway } from "./road-carriageway";
import { RoadSurfaceCondition } from "./road-surface-condition";
import { SeverityLevel } from "./severity-level";
import { SpeedLimit } from "./speed-limit";
import { SubCityMaster } from "./subcity";
import { TerrainType } from "./terrain-type";
import { UserMaster } from "./user-master";
import { WeatherCondition } from "./weather-condition-model";
import { WoredaMaster } from "./woreda";
import { ZoneMaster } from "./zone";

export interface AccidentDetailsTransaction{
   lat :number;
   long :number;
   accidentId :number;
   dateAndTime :Date;
   psid:String;
   kebeleName :string;
   piname :string;
   policeRecordNumber :string;

  numberOfVehicles:number;
  propertyDamage :number;
  numberofVictims :number;


   video1? :string;
   video2? :string;
   video3? :string;
   video4? :string;
   image1?:string;
   image2?:string;
   image3?:string;
   image4?:string;
   image5?:string;
   image6?:string;
  submissionFlag:number;
hid:string;
  accidentLocalName :string;

  accidentType :AccidentType | undefined;
  airCondition :AirConditionType | undefined;
  causeofAccident :AccidentCause| undefined;
  city:CityMaster | undefined;
  region :RegionMaster | undefined;
  woreda :WoredaMaster | undefined;
  zoneMasterEntity:ZoneMaster | undefined;
  pavementType :PavementType | undefined;
  landmarkType:LandmarkType | undefined;
  terrianType :TerrainType | undefined;
  collisionType:CollisionType | undefined;
  hidNavigation:HighwayMaster | undefined;
  highwayType :HighwayType | undefined;
  impactType :ImpactType | undefined;
  junctionType :JunctionType | undefined;
  lightCondtion:LightCondition | undefined;
  subCity :SubCityMaster | undefined;
  weatherCond :WeatherCondition | undefined;
  user:UserMaster | undefined;
  speedLimit:SpeedLimit | undefined;
  severity :SeverityLevel | undefined;
  roadCarriageway :RoadCarriageway | undefined;
  roadSurface :RoadSurfaceCondition | undefined;
  ps :PoliceStation | undefined;















       // public virtual UserMasterEntity User { get; set; } = null!;




}
