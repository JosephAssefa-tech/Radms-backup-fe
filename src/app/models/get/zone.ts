import { RegionMaster } from "./region";

export interface ZoneMaster{
  zoneId: number,
  zoneName: string,
  region?:RegionMaster
}
