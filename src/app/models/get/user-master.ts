import { OrganizationMaster } from "./organization-master";

export interface UserMaster{
   userId :number;

   userPassword :string;

    userName :string;

    dateTimeUser :Date;

   //organizationId :number;
   organizationMasterEntity  :OrganizationMaster | undefined;

}
