import { BaseService } from '../base-service/BaseService';
import { FormMaster } from 'src/app/models/get/form-master';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormMasterService extends BaseService<FormMaster> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'FormMaster';
   }
}

