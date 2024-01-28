import { FormMaster } from "./form-master";
import { UserType } from "./user-type";

export interface UserRoleTransaction{

 departmentTypeId :number;

  userTypeId :number;

  formId:number;

    formMasterEntity? :FormMaster;

    userTypeLookupEntity? :UserType;
}
