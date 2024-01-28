export interface VehicleDetailsTransaction

{

   accidentId :number;
   vehicleInvolvedId :number;
   vehicleId :number;
   numberPlate? :string;

   vehicleAgeId? :number;
   vehicleDefectId? :number;
   driverName? :string;
   dlcatagoryId :number;

   driverAge :number;
   educationLevelId :number;
   driverExperienceId :number;
   vehicleOwnershipId :number;

   genderId :number;
   dlstatus :number;
   dllevelId? :number;
   dlnumber? :string;

   vehicleRelationId? :number;
   vehicleMovementId :number;
   isOverSpeed? :number;
   recordedSpeed? :number;

  isAlcohalConsumed? :number;
  alcohalConsumptionLevel? :number;
  validInsurance :number;
  accuseStatus :number;

}
