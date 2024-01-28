import { CityMaster } from "./city";

export interface SubCityMaster{
  subCityId: number,
  subCityName: string,
  city:CityMaster,
}
