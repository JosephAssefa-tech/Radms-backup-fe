import { AccidentDetailsTransaction } from "./accident-details-transaction";

export interface LegalMeasurementDetailsTransaction
{
  isSuspended :boolean;
  isunderInvestigation:boolean;
  isDeadFile :boolean;
  isRemand :boolean;
  isReleaseFree :boolean;
  imprisonment :number;
  moneyDesposit :number;
   accidentDetailsTransaction?:AccidentDetailsTransaction;
   victimDetailsTransaction?

}

