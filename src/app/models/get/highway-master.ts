import { HighwayOwnerMaster } from "./highway-owner";
import { HighwayType } from "./highway-type";

export interface HighwayMaster
{
   hid :string;
   hname :string;
   hlength:number;
  startChange :number;
  endChanage:number;
   highwayOwner :HighwayOwnerMaster | undefined;
   highwayType :HighwayType | undefined;

}
