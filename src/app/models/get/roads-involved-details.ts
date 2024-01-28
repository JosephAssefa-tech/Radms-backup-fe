import { AccidentDetailsTransaction } from "./accident-details-transaction";

export interface RoadsInvolvedDetailsTransaction{
  accidentId? :AccidentDetailsTransaction | undefined;
  roadInvolvedId:number;
  hid :string;
  pavementTypeId :number;
  roadSurfaceId :number;
  roadCarriagewayId :number;

  //[ForeignKey("AccidentId")]
 // public virtual AccidentDetailsTransactionEntity? Accident { get; set; }
  //[ForeignKey("Hid")]
 // public virtual HighwayMasterEntity HidNavigation { get; set; } = null!;
  //[ForeignKey("PavementTypeId")]
 // public virtual PavementTypeLookupEntity PavementType { get; set; } = null!;
  //[ForeignKey("RoadCarriagewayId")]
 // public virtual RoadCarriagewayTypeLookupEntity RoadCarriageway { get; set; } = null!;
  //[ForeignKey("RoadSurfaceId")]
  //public virtual RoadSurfaceConditionLookupEntity RoadSurface { get; set; } = null!;

}
