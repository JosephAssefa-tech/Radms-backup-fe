import { SubCityMaster } from "./subcity"
import { WoredaMaster } from "./woreda";

export interface PoliceStation{
  psid: number,
  psname: string
  subCity:SubCityMaster;
  woreda:WoredaMaster
}
