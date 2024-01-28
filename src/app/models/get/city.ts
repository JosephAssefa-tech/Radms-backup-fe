import { WoredaMaster } from "./woreda";

export interface CityMaster{
  cityId: number,
  cityName: string,
  woreda:WoredaMaster,
}
