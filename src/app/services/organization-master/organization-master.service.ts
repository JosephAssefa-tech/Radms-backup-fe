import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganizationMaster } from 'src/app/models/get/organization-master';

@Injectable({
  providedIn: 'root'
})
export class OrganizationMasterService extends BaseService<OrganizationMaster> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'LightCondition';
   }
}

